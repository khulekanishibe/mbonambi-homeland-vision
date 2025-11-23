import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Building2, Award, Clock } from "lucide-react";
import { format, parseISO, differenceInHours } from "date-fns";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export type TenderStatus = 'OPEN' | 'CLOSED' | 'AWARDED';

export interface Tender {
  id: string;
  title: string;
  reference_number: string;
  description: string;
  category: string;
  document_url: string;
  opening_date: string;
  closing_date: string;
  status: TenderStatus;
  awarded_to?: string;
  award_value_zar?: number;
}

const API_BASE_URL = "http://localhost:8001";

const fetchTenders = async (status?: TenderStatus): Promise<Tender[]> => {
  const url = status 
    ? `${API_BASE_URL}/api/tenders?status=${status}`
    : `${API_BASE_URL}/api/tenders`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch tenders: ${response.statusText}`);
  }
  return response.json();
};

const TenderCard = ({ tender }: { tender: Tender }) => {
  const closingDate = parseISO(tender.closing_date);
  const hoursUntilClose = differenceInHours(closingDate, new Date());
  const isClosingSoon = tender.status === 'OPEN' && hoursUntilClose > 0 && hoursUntilClose < 48;

  const statusConfig = {
    OPEN: { color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20", label: "Open" },
    CLOSED: { color: "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20", label: "Closed" },
    AWARDED: { color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20", label: "Awarded" }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className="font-mono text-xs">
            {tender.reference_number}
          </Badge>
          <Badge className={`${statusConfig[tender.status].color} border`}>
            {statusConfig[tender.status].label}
          </Badge>
        </div>
        <CardTitle className="text-xl line-clamp-2">{tender.title}</CardTitle>
        <CardDescription className="flex items-center gap-1.5 text-xs">
          <Building2 className="h-3.5 w-3.5" />
          {tender.category}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {tender.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-xs">Opens: {format(parseISO(tender.opening_date), 'PPP')}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className={`text-xs font-medium ${isClosingSoon ? 'text-destructive' : 'text-muted-foreground'}`}>
              Closes: {format(closingDate, 'PPP')}
            </span>
            {isClosingSoon && (
              <Badge variant="destructive" className="text-xs py-0">
                Closing Soon
              </Badge>
            )}
          </div>
        </div>

        {tender.status === 'AWARDED' && tender.awarded_to && (
          <div className="mt-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-start gap-2">
              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">
                  Contract Awarded
                </p>
                <p className="text-sm font-medium">{tender.awarded_to}</p>
                {tender.award_value_zar && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Value: R {tender.award_value_zar.toLocaleString('en-ZA')}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        {tender.status === 'OPEN' && (
          <Button 
            className="w-full" 
            onClick={() => window.open(tender.document_url, '_blank')}
          >
            <Download className="h-4 w-4" />
            Download Specifications
          </Button>
        )}
        
        {tender.status === 'CLOSED' && (
          <Button className="w-full" disabled variant="outline">
            Submissions Closed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Tenders = () => {
  const [activeTab, setActiveTab] = useState<'open' | 'closed' | 'awarded'>('open');

  const { data: openTenders, isLoading: loadingOpen, error: errorOpen } = useQuery({
    queryKey: ['tenders', 'OPEN'],
    queryFn: () => fetchTenders('OPEN'),
  });

  const { data: closedTenders, isLoading: loadingClosed, error: errorClosed } = useQuery({
    queryKey: ['tenders', 'CLOSED'],
    queryFn: () => fetchTenders('CLOSED'),
    enabled: activeTab === 'closed',
  });

  const { data: awardedTenders, isLoading: loadingAwarded, error: errorAwarded } = useQuery({
    queryKey: ['tenders', 'AWARDED'],
    queryFn: () => fetchTenders('AWARDED'),
    enabled: activeTab === 'awarded',
  });

  const renderContent = (
    tenders: Tender[] | undefined,
    isLoading: boolean,
    error: Error | null,
    emptyMessage: string
  ) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Loading tenders...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Unable to Load Tenders</h3>
          <p className="text-sm text-muted-foreground max-w-md mb-4">
            There was an error connecting to the server. Please ensure the backend is running.
          </p>
          <code className="text-xs bg-muted px-2 py-1 rounded">{error.message}</code>
        </div>
      );
    }

    if (!tenders || tenders.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Tenders Available</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            {emptyMessage}
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenders.map((tender) => (
          <TenderCard key={tender.id} tender={tender} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Procurement & Tenders
          </h1>
          <p className="text-lg text-muted-foreground">
            Current business opportunities and contract awards from the Mbonambi Community Trust
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="open" className="gap-2">
              <Clock className="h-4 w-4" />
              Open
            </TabsTrigger>
            <TabsTrigger value="closed" className="gap-2">
              <FileText className="h-4 w-4" />
              Closed
            </TabsTrigger>
            <TabsTrigger value="awarded" className="gap-2">
              <Award className="h-4 w-4" />
              Awarded
            </TabsTrigger>
          </TabsList>

          <TabsContent value="open">
            {renderContent(
              openTenders,
              loadingOpen,
              errorOpen,
              "There are currently no open tender opportunities. Please check back later."
            )}
          </TabsContent>

          <TabsContent value="closed">
            {renderContent(
              closedTenders,
              loadingClosed,
              errorClosed,
              "There are no recently closed tenders."
            )}
          </TabsContent>

          <TabsContent value="awarded">
            {renderContent(
              awardedTenders,
              loadingAwarded,
              errorAwarded,
              "No tender awards have been published yet."
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Tenders;