import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  GraduationCap, 
  Sprout, 
  Heart, 
  Home, 
  Trophy,
  FileText,
  Download,
  Book,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

export type ProgrammeTheme = 
  | "EDUCATION"
  | "AGRICULTURE"
  | "SMME_DEVELOPMENT"
  | "HEALTH"
  | "INFRASTRUCTURE"
  | "SPORTS_CULTURE"
  | "SOCIAL_WELFARE";

export type DocumentCategory = 
  | "PROGRAMME_INFO"
  | "APPLICATION_FORM"
  | "FINANCIAL_STATEMENT"
  | "ANNUAL_REPORT"
  | "QUARTERLY_REPORT"
  | "GOVERNANCE_POLICY"
  | "MEETING_MINUTES"
  | "OTHER";

export interface ProgrammeDocument {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  programme_theme?: ProgrammeTheme;
  file_url: string;
  published_at: string;
}

const API_BASE_URL = "http://localhost:8001";

const fetchDocuments = async (
  category?: DocumentCategory,
  programmeTheme?: ProgrammeTheme
): Promise<ProgrammeDocument[]> => {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (programmeTheme) params.append("programme_theme", programmeTheme);
  
  const url = `${API_BASE_URL}/api/documents?${params.toString()}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch documents: ${response.statusText}`);
  }
  return response.json();
};

interface ProgrammeSection {
  id: ProgrammeTheme;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

const getProgrammeSections = (t: any): ProgrammeSection[] => [
  {
    id: "EDUCATION",
    title: t('programmes.sections.education.title'),
    icon: GraduationCap,
    description: t('programmes.sections.education.description'),
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "AGRICULTURE",
    title: t('programmes.sections.agriculture.title'),
    icon: Sprout,
    description: t('programmes.sections.agriculture.description'),
    color: "text-green-600 dark:text-green-400"
  },
  {
    id: "SOCIAL_WELFARE",
    title: t('programmes.sections.welfare.title'),
    icon: Heart,
    description: t('programmes.sections.welfare.description'),
    color: "text-rose-600 dark:text-rose-400"
  },
  {
    id: "INFRASTRUCTURE",
    title: t('programmes.sections.infrastructure.title'),
    icon: Home,
    description: t('programmes.sections.infrastructure.description'),
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    id: "SPORTS_CULTURE",
    title: t('programmes.sections.sports.title'),
    icon: Trophy,
    description: t('programmes.sections.sports.description'),
    color: "text-purple-600 dark:text-purple-400"
  }
];

const DocumentItem = ({ document, t }: { document: ProgrammeDocument; t: any }) => {
  const isApplicationForm = document.category === "APPLICATION_FORM";
  
  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors group">
      <div className="flex items-start gap-3 flex-1">
        <div className={`p-2 rounded-md ${isApplicationForm ? 'bg-primary/10' : 'bg-muted'}`}>
          {isApplicationForm ? (
            <Download className={`h-4 w-4 ${isApplicationForm ? 'text-primary' : 'text-muted-foreground'}`} />
          ) : (
            <Book className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-medium text-sm line-clamp-1">{document.title}</p>
            {isApplicationForm && (
              <Badge variant="default" className="text-xs shrink-0">
                {t('programmes.badges.application')}
              </Badge>
            )}
          </div>
          {document.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {document.description}
            </p>
          )}
        </div>
      </div>
      
      <Button
        size="sm"
        variant={isApplicationForm ? "default" : "outline"}
        onClick={() => window.open(document.file_url, '_blank')}
        className="shrink-0"
      >
        <ExternalLink className="h-3.5 w-3.5" />
        {isApplicationForm ? t('programmes.actions.apply') : t('programmes.actions.view')}
      </Button>
    </div>
  );
};

const ProgrammeSection = ({ section, t }: { section: ProgrammeSection; t: any }) => {
  const { data: documents, isLoading, error } = useQuery({
    queryKey: ['programme-documents', section.id],
    queryFn: () => fetchDocuments(undefined, section.id),
  });

  const policies = documents?.filter(d => d.category === "PROGRAMME_INFO") || [];
  const forms = documents?.filter(d => d.category === "APPLICATION_FORM") || [];

  return (
    <Card id={section.id} className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-muted ${section.color}`}>
            <section.icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl mb-2">{section.title}</CardTitle>
            <CardDescription className="text-base">
              {section.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-6 animate-spin rounded-full border-3 border-primary border-t-transparent" />
              <p className="text-sm text-muted-foreground">{t('programmes.loading')}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <p className="text-sm text-destructive">{t('programmes.error')}</p>
          </div>
        )}

        {!isLoading && !error && documents && documents.length === 0 && (
          <div className="text-center py-8">
            <FileText className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              {t('programmes.emptyState', { section: section.title })}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t('programmes.emptyStateSubtext')}
            </p>
          </div>
        )}

        {!isLoading && !error && documents && documents.length > 0 && (
          <div className="space-y-6">
            {forms.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Download className="h-4 w-4 text-primary" />
                  {t('programmes.documentTypes.applicationForms')}
                </h4>
                <div className="space-y-2">
                  {forms.map(doc => <DocumentItem key={doc.id} document={doc} t={t} />)}
                </div>
              </div>
            )}

            {policies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Book className="h-4 w-4 text-muted-foreground" />
                  {t('programmes.documentTypes.programmeInfo')}
                </h4>
                <div className="space-y-2">
                  {policies.map(doc => <DocumentItem key={doc.id} document={doc} t={t} />)}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Programmes = () => {
  const { t } = useTranslation();
  const programmeSections = getProgrammeSections(t);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('programmes.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('programmes.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="border-b bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
          <ScrollArea className="w-full">
            <div className="container mx-auto px-4">
              <div className="flex gap-2 py-3">
                {programmeSections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap bg-background hover:bg-accent transition-colors border"
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Programme Sections */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {programmeSections.map(section => (
              <ProgrammeSection key={section.id} section={section} t={t} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programmes;