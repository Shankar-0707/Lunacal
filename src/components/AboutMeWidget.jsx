import React, { useState } from "react";
import Image from "../assets/Vector.png"
import Image2 from "../assets/rectangle.png"
import Image3 from "../assets/rectangle2.png"

const tabs = ["About Me", "Experiences", "Recommended"];

function AboutMeWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  // Utility classes for the distinct, layered dark background effect
  const widgetClass = ` 
 

  before:bg-pink-400 
 
  hover:before:translate-x-0
  `;

  return (
    <div
      className=" h-[270px]
    p-6 rounded-xl backdrop-blur-sm
    bg-gray-600/60 shadow-2xl
    
   
    before:content-[''] before:absolute before:inset-0 before:bg-gray-700/50 before:rounded-xl before:z-[-1]"
    >
      <div className="flex justify-between gap-2">
        <img src={Image} alt="question" className="w-[15px] h-[28px] pt-2"/>

      {/* Tab Navigation */}
        <div className="flex mx-auto w-[550px] h-[50px] justify-around p-1 mb-2 rounded-2xl bg-[rgba(23,23,23,1)] shadow-inner shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-2 text-md font-semibold rounded-2xl transition-all duration-200
                ${
                  activeTab === tab
                    ? "bg-[#20242c] text-white text-lg shadow-lg shadow-gray-900/50" // Active tab style
                    : "relative text-gray-400 text-lg font-medium px-5 py-2 rounded-2xl overflow-hidden transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:bg-gray-600/40 before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-0"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      {/* Note: The content itself also seems to sit on a slight, darker background layer */}
      <div className="flex justify-between gap-3">
        <img src={Image2} alt="" className="h-[30px] mt-15" />
        <div className="p-4 rounded-lg h-[180px]">
        {activeTab && (
          <div className="">
            <p className="text-[rgba(150,150,150,1)] text-md">
              Hello! I'm Dave, your sales rep here from Salesforce. I've
              been working at this awesome company for 3 years now.
            </p>
            <br />
            <p className="text-[rgba(150,150,150,1)] text-md overflow-hidden">
              I was born and raised in Albany, NY & have been living in
              Santa Carla for the past 10 years my wife Tiffany and
              my 4 year old twin daughters- Emma and Ella. Both of them
              are just starting school, so my calendar is usually blocked
              between 9-10 AM. This is...
            </p>
            {/* The actual content text is truncated in the image, use '...' for realism */}
        
          </div>
          
        )}



        </div>
        <img src={Image3} alt="" className="h-[70px] mt-7" />
      </div>
    </div>
  );
}

export default AboutMeWidget;
