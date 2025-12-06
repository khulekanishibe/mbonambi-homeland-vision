import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FileText, FileSpreadsheet, FileCheck, Download, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MegaMenu from '@/components/MegaMenu';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

// Types matching backend
export type DocumentCategory = 
  | 'FINANCIAL_STATEMENT'
  | 'ANNUAL_REPORT'
  | 'QUARTERLY_REPORT'
  | 'GOVERNANCE_POLICY'
  | 'MEETING_MINUTES'
  | 'OTHER';

export interface Document {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  programme_theme?: string;
  file_url: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  uploaded_by: string;
}

// API Functions
const API_BASE_URL = 'http://localhost:8001';

async function fetchDocuments(category?: DocumentCategory | string): Promise<Document[]> {
  const params = new URLSearchParams();
  if (category) {
    params.append('category', category);
  }
  
  const url = `${API_BASE_URL}/api/documents?${params.toString()}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch documents');
  }
  
  return response.json();
}

// Category configs - will be populated with translations in component
const getCategoryConfig = (t: any) => ({
  FINANCIAL_STATEMENT: {
    icon: FileSpreadsheet,
    label: t('transparency.categories.financial_statement'),
    color: 'text-green-500'
  },
  ANNUAL_REPORT: {
    icon: FileText,
    label: t('transparency.categories.annual_report'),
    color: 'text-blue-500'
  },
  QUARTERLY_REPORT: {
    icon: FileText,
    label: t('transparency.categories.quarterly_report'),
    color: 'text-cyan-500'
  },
  GOVERNANCE_POLICY: {
    icon: FileCheck,
    label: t('transparency.categories.governance_policy'),
    color: 'text-purple-500'
  },
  MEETING_MINUTES: {
    icon: FileText,
    label: t('transparency.categories.meeting_minutes'),
    color: 'text-orange-500'
  },
  OTHER: {
    icon: FileText,
    label: t('transparency.categories.other'),
    color: 'text-muted-foreground'
  }
});

// Document Card Component
function DocumentCard({ document, t, categoryConfig }: { document: Document; t: any; categoryConfig: any }) {
  const config = categoryConfig[document.category];
  const Icon = config.icon;
  
  const handleDownload = () => {
    window.open(document.file_url, '_blank');
  };
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`h-5 w-5 ${config.color}`} />
              <Badge variant="secondary" className="text-xs">
                {config.label}
              </Badge>
            </div>
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {document.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2 line-clamp-2">
          {document.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {format(new Date(document.published_at), 'MMM dd, yyyy')}
          </span>
          <Button 
            onClick={handleDownload}
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Download className="h-4 w-4 mr-2" />
            {t('transparency.actions.download')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Empty State Component
function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
}

// Main Component
export default function TransparencyPortal() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const categoryConfig = getCategoryConfig(t);
  
  // Queries for each tab
  const allQuery = useQuery({
    queryKey: ['documents', 'all'],
    queryFn: () => fetchDocuments(),
  });
  
  const financialsQuery = useQuery({
    queryKey: ['documents', 'financials'],
    queryFn: async () => {
      const docs = await fetchDocuments();
      return docs.filter(d => 
        ['FINANCIAL_STATEMENT', 'ANNUAL_REPORT', 'QUARTERLY_REPORT'].includes(d.category)
      );
    },
    enabled: activeTab === 'financials'
  });
  
  const governanceQuery = useQuery({
    queryKey: ['documents', 'governance'],
    queryFn: () => fetchDocuments('GOVERNANCE_POLICY'),
    enabled: activeTab === 'governance'
  });
  
  const meetingsQuery = useQuery({
    queryKey: ['documents', 'meetings'],
    queryFn: () => fetchDocuments('MEETING_MINUTES'),
    enabled: activeTab === 'meetings'
  });
  
  const getQueryForTab = () => {
    switch (activeTab) {
      case 'financials': return financialsQuery;
      case 'governance': return governanceQuery;
      case 'meetings': return meetingsQuery;
      default: return allQuery;
    }
  };
  
  const currentQuery = getQueryForTab();
  
  return (
    <div className="min-h-screen bg-background">
      <MegaMenu />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('transparency.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('transparency.subtitle')}
          </p>
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="all">{t('transparency.tabs.all')}</TabsTrigger>
            <TabsTrigger value="financials">{t('transparency.tabs.financials')}</TabsTrigger>
            <TabsTrigger value="governance">{t('transparency.tabs.governance')}</TabsTrigger>
            <TabsTrigger value="meetings">{t('transparency.tabs.meetings')}</TabsTrigger>
          </TabsList>
          
          {/* Tab Content */}
          <TabsContent value={activeTab} className="space-y-6">
            {currentQuery.isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">{t('transparency.loading')}</p>
              </div>
            )}
            
            {currentQuery.isError && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
                <p className="text-destructive">
                  {t('transparency.error')}
                </p>
              </div>
            )}
            
            {currentQuery.isSuccess && (
              <>
                {currentQuery.data.length === 0 ? (
                  <EmptyState message={t('transparency.emptyState')} />
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-muted-foreground">
                        {t('transparency.showingCount', { count: currentQuery.data.length })}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentQuery.data.map((doc) => (
                        <DocumentCard key={doc.id} document={doc} t={t} categoryConfig={categoryConfig} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}
