import { VerificationProvider } from './context/VerificationContext';
import { useVerification } from './context/useVerification';
import { AppShell } from './components/layout/AppShell';
import { OverviewView } from './views/OverviewView';
import { NewVerificationView } from './views/NewVerificationView';
import { AnalysisPipelineView } from './views/AnalysisPipelineView';
import { ReviewerDashboardView } from './views/ReviewerDashboardView';
import { IssuesListView } from './views/IssuesListView';
import { AnalyticsView } from './views/AnalyticsView';
import { VerificationReport } from './components/insights/VerificationReport';

function AppContent() {
  const { activeView } = useVerification();

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return <OverviewView />;
      case 'new':
        return <NewVerificationView />;
      case 'analysis':
        return <AnalysisPipelineView />;
      case 'review':
        return <ReviewerDashboardView />;
      case 'issues':
        return <IssuesListView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'report':
        return <VerificationReport />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <AppShell>
      {renderActiveView()}
    </AppShell>
  );
}

export default function App() {
  return (
    <VerificationProvider>
      <AppContent />
    </VerificationProvider>
  );
}
