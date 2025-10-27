import React, { useState, useCallback } from 'react';
import Vector from '../assets/Vector.png'
import Rectangle from '../assets/rectangle.png'

// Sample data for the images (increased count to demonstrate scrolling)
const sampleImages = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&auto=format&q=75',
 
];

function GalleryWidget() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  // This defines the viewing window size. Adjust based on your screen size.
  const imagesPerPage = 4; 
  const totalImages = sampleImages.length;

  const handleGalleryClick = () => console.log('Gallery clicked');
  const handleAddImageClick = () => console.log('Add image clicked');

  const handlePrevClick = useCallback(() => {
    // Move back by one image, ensuring we don't go below 0
    setStartIndex(prev => Math.max(0, prev - 1));
  }, []);

  const handleNextClick = useCallback(() => {
    // Move forward by one image, ensuring we don't exceed the limit
    setStartIndex(prev => Math.min(prev + 1, totalImages - imagesPerPage));
  }, [totalImages, imagesPerPage]);
  
  // Calculate the horizontal shift needed for the scroll effect.
  // Assuming each image is 180px wide and the gap is 16px (gap-4).
  const itemWidth = 180;
  const itemGap = 16; 
  const galleryTranslateStyle = {
    transform: `translateX(-${startIndex * (itemWidth + itemGap)}px)`, 
    transition: 'transform 0.3s ease-in-out',
  };


  return (
    // 1. **FIX: Reintroduced h-[270px] and applied 'flex' and 'flex-col'** // to manage vertical space within the fixed height.
    <div className="relative rounded-xl p-6 overflow-hidden flex flex-col h-[300px]
        bg-gray-600/60 shadow-2xl 
        before:content-[''] before:absolute before:inset-0 
        before:bg-gray-700/50 before:rounded-xl before:z-[-1]">
      
      {/* Question mark icon at top-left (Positioning remains absolute relative to main div) */}
      <div className="absolute top-6 left-6 z-10">
        <img src={Vector} alt="question" className="w-4 h-4 text-gray-400" />
      </div>

      {/* Header with Gallery, Add Image, and Navigation (Fixed height/shrinks) */}
      <div className="flex justify-between items-center mb-6 pt-1 shrink-0">
        {/* Gallery Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleGalleryClick}
            className="px-6 ml-8 py-2.5 text-sm font-medium rounded-2xl bg-black text-white shadow-lg cursor-pointer"
          >
            Gallery
          </button>
        </div>
        
        {/* Navigation and Add Image buttons together on the right */}
        <div className="flex items-center gap-2">
          {/* Add Image Button */}
          <button 
            onClick={handleAddImageClick}
            className="flex items-center gap-1 px-4 py-2.5 text-xs font-medium rounded-2xl bg-[rgba(180,180,180,1)] text-white shadow-[0_2px_8px_rgba(0,0,0,0.2),0_0_20px_rgba(150,150,150,0.4)] cursor-pointer"
          >
            <span className="text-base leading-none">+</span>
            <span>ADD IMAGE</span>
          </button>

          {/* Navigation Arrows - Disabled logic added */}
          <button 
            onClick={handlePrevClick}
            disabled={startIndex === 0} // Disable if at the start
            className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 cursor-pointer ${
                startIndex === 0 ? 'bg-[rgba(23,23,23,0.5)] text-gray-600' : 'bg-[rgba(23,23,23,1)] hover:bg-[rgba(15,15,15,1)]'
            }`}
          >
            <span className="text-lg font-medium">&lt;</span>
          </button>
          <button 
            onClick={handleNextClick}
            disabled={startIndex >= totalImages - imagesPerPage} // Disable if at the end
            className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 cursor-pointer ${
                startIndex >= totalImages - imagesPerPage ? 'bg-[rgba(23,23,23,0.5)] text-gray-600' : 'bg-[rgba(23,23,23,1)] hover:bg-[rgba(15,15,15,1)]'
            }`}
          >
            <span className="text-lg font-medium">&gt;</span>
          </button>
        </div>
      </div>

      {/* Image Gallery Wrapper (Uses flex-grow to fill remaining vertical space) */}
      {/* 2. **FIX: Added flex-grow and max-h-full** */}
      <div className="flex gap-4 flex-grow max-h-full">
        {/* Grid Icon on the left (Shrinks) */}
        <div className="shrink-0 pt-1">
          <img src={Rectangle} alt="grid" className="w-8 h-8" />
        </div>

        {/* Scrollable Image Row Container */}
        <div className="flex-1 overflow-hidden"> 
            {/* The actual image row needs the full height of the container to prevent image overflow */}
            <div className="flex gap-4 pb-2 h-full items-center" style={galleryTranslateStyle}>
                {sampleImages.map((img, id) => (
                    <div
                        key={id}
                        onMouseEnter={() => setHoveredImage(id)}
                        onMouseLeave={() => setHoveredImage(null)}
                        // Adjusted image height to be slightly smaller (h-[200px] instead of h-[240px])
                        // to ensure it fits vertically within the 270px overall height.
                        className={`shrink-0 w-[180px] h-[200px] rounded-2xl overflow-hidden bg-gray-700 transition-all duration-300 ease-in-out ${
                            hoveredImage === id 
                                ? '-translate-y-2 -rotate-2 shadow-[0_10px_25px_rgba(0,0,0,0.8)]' 
                                : ''
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${id + 1}`}
                            className={`w-full h-full object-cover rounded-2xl transition-all duration-300 ${
                                hoveredImage === id ? 'grayscale-0 brightness-100' : 'grayscale brightness-75'
                            }`}
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryWidget;