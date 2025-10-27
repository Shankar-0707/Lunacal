// src/App.js or src/components/Layout.jsx

import AboutMeWidget from './components/AboutMeWidget';
import GalleryWidget from './components/GallerWidget';


function App() {
  return (
     
    <div className="min-h-screen text-white p-4 md:p-12 bg-[rgba(25,27,31,1)]">
      <div className="flex justify-end">
        {/* Right-aligned container for widgets */}
        <div className="w-1/2 space-y-8">
          {/* First Widget */}
          <AboutMeWidget />

          {/* Second Widget */}
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;