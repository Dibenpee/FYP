import { Card } from "../components/ui/card";
import {
  ProgressBar,
  HealthScoreProgress,
  HealthMetricsProgress,
  CircularProgress,
} from "../components/ProgressBar";
import Sidebar from "../components/SideBar";

const ComponentShowcase = () => {
  const demoMetrics = [
    { label: "Blood Pressure", value: 85, variant: "success" },
    { label: "Cholesterol", value: 72, variant: "warning" },
    { label: "Blood Sugar", value: 90, variant: "success" },
    { label: "BMI", value: 78, variant: "info" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sidebar />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Health Metrics Showcase
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HealthScoreProgress score={92} />

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Progress Variants
            </h3>
            <div className="space-y-4">
              <ProgressBar label="Overall Health" value={85} variant="health" />
              <ProgressBar
                label="Treatment Progress"
                value={70}
                variant="success"
              />
              <ProgressBar label="Recovery Rate" value={60} variant="warning" />
              <ProgressBar
                label="Medication Adherence"
                value={95}
                variant="info"
              />
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-4">
                Circular Progress
              </h3>
              <CircularProgress
                value={78}
                size={120}
                variant="health"
                label="Fitness Score"
              />
            </Card>

            <Card className="p-4">
              <HealthMetricsProgress metrics={demoMetrics} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
