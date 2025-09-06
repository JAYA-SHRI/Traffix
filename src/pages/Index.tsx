import TrafficHeader from "@/components/TrafficHeader";
import StatisticsPanel from "@/components/StatisticsPanel";
import VideoFeed from "@/components/VideoFeed";
import ViolationsList from "@/components/ViolationsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TrafficHeader />
      
      <main className="p-6">
        <StatisticsPanel />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VideoFeed />
          <ViolationsList />
        </div>
      </main>
    </div>
  );
};

export default Index;