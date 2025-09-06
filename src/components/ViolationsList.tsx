import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Filter } from "lucide-react";

const ViolationsList = () => {
  const violations = [
    {
      id: "VL-2024-001",
      type: "Speed Violation",
      vehicle: "ABC-123",
      location: "Main St & 5th Avenue,Chennai",
      time: "2024-01-15 14:32:15",
      severity: "High",
      status: "Pending"
    },
    {
      id: "VL-2024-002", 
      type: "Red Light Running",
      vehicle: "XYZ-789",
      location: "Park Rd Junction, Coimbatore, India",
      time: "2024-01-15 14:30:42",
      severity: "Critical",
      status: "Under Review"
    },
    {
      id: "VL-2024-003",
      type: "Illegal Parking",
      vehicle: "DEF-456",
      location: "Bus Stop Zone A, Gandipuram, Coimbatore district, Tamilnadu",
      time: "2024-01-15 14:28:10", 
      severity: "Medium",
      status: "Resolved"
    },
    {
      id: "VL-2024-004",
      type: "Lane Violation",
      vehicle: "GHI-321",
      location: "Highway Exit 12, Neelambur, Coimbatore district, Tamilnadu, India-641064",
      time: "2024-01-15 14:25:33",
      severity: "Low",
      status: "Pending"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-violation text-violation-foreground';
      case 'High': return 'bg-warning text-warning-foreground';
      case 'Medium': return 'bg-primary text-primary-foreground';
      case 'Low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-safe text-safe-foreground';
      case 'Under Review': return 'bg-warning text-warning-foreground';
      case 'Pending': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="bg-gradient-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">Recent Violations</CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {violations.map((violation) => (
            <div key={violation.id} className="bg-secondary/30 p-4 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{violation.type}</h4>
                    <Badge className={getSeverityColor(violation.severity)}>
                      {violation.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">ID: {violation.id}</p>
                </div>
                <Badge className={getStatusColor(violation.status)}>
                  {violation.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Vehicle: </span>
                  <span className="text-foreground font-medium">{violation.vehicle}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Location: </span>
                  <span className="text-foreground">{violation.location}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Time: </span>
                  <span className="text-foreground">{violation.time}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ViolationsList;