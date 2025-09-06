import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Upload, Video } from "lucide-react";
import trafficBg from "@/assets/traffic-bg.jpg";

const VideoFeed = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [detectedViolations, setDetectedViolations] = useState([
    { id: 1, type: "Speed Violation", location: "Lane 2", time: "14:32:15", confidence: 95 },
    { id: 2, type: "Red Light Running", location: "Lane 1", time: "14:30:42", confidence: 98 },
  ]);

  return (
    <Card className="bg-gradient-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">Live Video Feed</CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <img 
            src={trafficBg} 
            alt="Traffic intersection" 
            className="w-full h-full object-cover"
          />
          
          {/* Violation detection overlays */}
          <div className="absolute top-4 left-4 bg-violation/90 text-violation-foreground px-3 py-1 rounded-full text-sm animate-pulse">
            Speed Violation Detected
          </div>
          
          <div className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-2 rounded-lg">
            <div className="text-xs text-muted-foreground">Camera 1 - Main Junction</div>
            <div className="text-sm font-medium">{new Date().toLocaleTimeString()}</div>
          </div>
          
          {/* Detection boxes simulation */}
          <div className="absolute top-1/3 left-1/2 w-24 h-16 border-2 border-violation rounded animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-20 h-14 border-2 border-safe rounded"></div>
        </div>
        
        {/* Live detection results */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground mb-2">Real-time Detections</h4>
          {detectedViolations.map((violation) => (
            <div key={violation.id} className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-violation animate-pulse"></div>
                <div>
                  <div className="text-sm font-medium text-foreground">{violation.type}</div>
                  <div className="text-xs text-muted-foreground">{violation.location} • {violation.time}</div>
                </div>
              </div>
              <div className="text-xs bg-violation/20 text-violation px-2 py-1 rounded">
                {violation.confidence}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoFeed;