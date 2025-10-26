import React from 'react';

// Sample data for the images (the same image is replicated in the mockup)
const sampleImages = [1, 2, 3];

function GalleryWidget() {
  // Utility classes for the distinct, layered dark background effect
  const widgetClass = `
    p-6 rounded-xl backdrop-blur-sm
    bg-gray-800/80 shadow-2xl
    relative
    // Implementing the dark layered effect seen in the image
    before:content-[''] before:absolute before:inset-0 before:bg-gray-700/50 before:rounded-xl before:z-[-1]
  `;

  const buttonClass = `
    flex items-center justify-center p-2 rounded-full
    bg-gray-900/70 hover:bg-gray-700/70 text-gray-400 hover:text-white transition-colors
    shadow-lg
  `;

  return (
    <div className={widgetClass}>
      {/* Header with Gallery, Add Image, and Navigation */}
      <div className="flex justify-between items-center mb-6">
        {/* Gallery Title Button */}
        <button className="px-5 py-2 text-lg font-semibold rounded-full bg-gray-900 text-white shadow-lg shadow-gray-900/50">
          Gallery
        </button>

        {/* Action and Navigation Group */}
        <div className="flex items-center space-x-3">
          {/* Add Image Button */}
          <button className="flex items-center space-x-1 px-4 py-2 text-sm font-semibold rounded-full bg-gray-700 hover:bg-gray-600 transition-colors shadow-lg">
            {/* A simple plus icon - you'd use an actual icon library here */}
            <span className="text-xl leading-none">+</span>
            <span>ADD IMAGE</span>
          </button>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button className={buttonClass}>
              {/* Left Arrow Icon - Using a simple character, replace with SVG/Icon */}
              &larr;
            </button>
            <button className={buttonClass}>
              {/* Right Arrow Icon - Using a simple character, replace with SVG/Icon */}
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex space-x-4 overflow-x-auto p-2">
        {sampleImages.map((id) => (
          // The exact UI shows images with a specific aspect ratio, border-radius,
          // and the dark, monochromatic style.
          <div
            key={id}
            className="flex-shrink-0 w-1/3 min-w-[120px] aspect-square rounded-lg overflow-hidden border border-gray-700/50 shadow-xl"
            style={{
                // Placeholder for the black and white abstract building image
                backgroundImage: 'url(/path/to/your/image.jpg)',
                backgroundSize: 'cover',
                filter: 'grayscale(100%) brightness(80%)' // Simulating the B&W/dark look
            }}
          >
            {/* In a real app, you would use an <img> tag here. */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;