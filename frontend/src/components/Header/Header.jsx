import React from "react";

const Header = () => {
  return (
    <div className="relative mx-auto mt-8 w-[90%] max-w-[1200px] bg-[#ff881a] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-lg min-h-[450px]">
      
      {/* Left Text Content */}
      <div className="flex-1 p-8 md:p-14 flex flex-col justify-center gap-5 z-10">
        <h2 className="text-5xl md:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm">
          Craving <br />
          something <br />
          <span className="text-[#1f2937]">delicious?</span>
        </h2>
        
        <p className="text-sm md:text-base font-medium text-white max-w-[450px] leading-relaxed mt-2 drop-shadow-sm">
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience!
        </p>
        
        <button className="bg-white text-[#ff881a] font-extrabold py-3.5 px-10 rounded-full w-max hover:bg-[#1f2937] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl mt-4 transform hover:-translate-y-1">
          View Menu
        </button>
      </div>
      
      {/* Right Image Content with Curve */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[300px]">
         {/* The big circular background curve */}
         <div className="absolute right-[-15%] top-[-20%] w-[120%] h-[140%] bg-[#e06c11] rounded-l-full z-0"></div>
         
         {/* The Food Image */}
         <img 
            src="/header_img.png" 
            className="w-[90%] md:w-[85%] object-contain z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out cursor-pointer" 
            alt="Delicious food delivery" 
         />
      </div>
      
    </div>
  );
};

export default Header;
