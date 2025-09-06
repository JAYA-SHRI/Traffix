import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const StatisticsPanel = () => {
  const stats = [
    {
      title: "Total Violations",
      value: "147",
      change: "+12%",
      icon: AlertTriangle,
      color: "violation",
      trend: "up"
    },
    {
      title: "Resolved Cases",
      value: "134",
      change: "+8%",
      icon: CheckCircle,
      color: "safe",
      trend: "up"
    },
    {
      title: "Active Cameras",
      value: "8/10",
      change: "Online",
      icon: Clock,
      color: "primary",
      trend: "stable"
    },
    {
      title: "Detection Rate",
      value: "98.5%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "safe",
      trend: "up"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="bg-gradient-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-xs ${
                    stat.color === 'violation' ? 'text-violation' :
                    stat.color === 'safe' ? 'text-safe' :
                    'text-primary'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  stat.color === 'violation' ? 'bg-violation/20' :
                  stat.color === 'safe' ? 'bg-safe/20' :
                  'bg-primary/20'
                }`}>
                  <IconComponent className={`h-6 w-6 ${
                    stat.color === 'violation' ? 'text-violation' :
                    stat.color === 'safe' ? 'text-safe' :
                    'text-primary'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatisticsPanel;