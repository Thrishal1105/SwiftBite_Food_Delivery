import React from 'react';

const PromoBanner = () => {
  return (
    <div 
      className="relative w-full overflow-hidden my-12 flex items-center justify-center bg-white min-h-[300px] md:min-h-[450px] lg:min-h-[500px]"
      style={{ 
        backgroundImage: "url('/landscape_food_banner.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 max-w-[600px]">
        <h2 className="text-[#e84c5c] font-extrabold text-3xl md:text-[3rem] leading-[1.1] mb-4 tracking-tight">
          Better food for <br/> more people
        </h2>
        <p className="text-[#64748b] text-sm md:text-lg font-medium leading-relaxed max-w-[450px]">
          For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep
        </p>
      </div>
    </div>
  );
};

export default PromoBanner;
