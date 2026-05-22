import VideoFeed from '@/components/feed/VideoFeed';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';

export default function Home() {
  return (
      <main className="bg-black text-white min-h-screen overflow-hidden">
        <div className="flex h-screen">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-72 border-r border-white/10">
            <Sidebar />
          </div>

          {/* Feed */}
          <div className="flex-1 relative">
            <VideoFeed />
          </div>

          {/* Right Space (Desktop) */}
          <div className="hidden xl:block w-80 border-l border-white/10 p-6">
            <div className="sticky top-6">
              <h3 className="text-xl font-semibold mb-4">Suggested for you</h3>
              {/* Mock suggested users */}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </main>
  );
}