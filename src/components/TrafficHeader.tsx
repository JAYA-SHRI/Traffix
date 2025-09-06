import { Camera, Settings, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import cameraIcon from "@/assets/camera-icon.png";

const TrafficHeader = () => {
  return (
    <header className="bg-gradient-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={cameraIcon} alt="Traffic Monitor" className="h-8 w-8" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Traffic Violation Detection</h1>
            <p className="text-sm text-muted-foreground">Real-time Video Analytics System</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-safe animate-pulse-slow"></div>
            System Online
          </div>
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            Cameras
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TrafficHeader;