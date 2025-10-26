// src/App.js or src/components/Layout.jsx

import AboutMeWidget from './components/AboutMeWidget';
import GalleryWidget from './components/GallerWidget';

function App() {
  return (
     
    <div className="min-h-screen  text-white p-4 md:p-12 bg-[rgba(25,27,31,1)]">
      <div className="flex justify-end">
        {/*
          This container ensures the widgets are on the right half.
          'md:w-1/2' makes it take up the right half on medium screens and up.
          'w-full' ensures it takes full width on smaller screens, though the prompt
          only requires responsiveness for laptops (above 768px).
        */}
        <div className="w-1/2 space-y-8  ">
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