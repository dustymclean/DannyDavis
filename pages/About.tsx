
import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ transform: `translateY(${offset * 0.2}px)` }}>
           <svg width="100%" height="100%"><pattern id="dot-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.5" fill="#2E4D3E" /></pattern><rect width="100%" height="100%" fill="url(#dot-grid)" /></svg>
        </div>
        
        <div className={`text-center max-w-6xl transition-all duration-[2500ms] cubic-bezier(0.19, 1, 0.22, 1) transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-[#8B6D31] text-[10px] uppercase tracking-[0.8em] font-black mb-12 block">The Manna Manifesto</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-[#2E4D3E] leading-[0.9] tracking-tighter mb-12">
            Legacy <br />
            <span className="italic text-[#C5A059]/80 font-medium">Defined.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto italic">
            "We do not grow plants; we manage ecosystems for the betterment of Mississippi's health."
          </p>
        </div>
      </section>

      <section className="py-32 md:py-48 px-8 md:px-20 bg-white">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-6 space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif text-[#2E4D3E] italic">The Heart of Manna.</h2>
            <div className="w-20 h-px bg-[#C5A059]"></div>
            <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed">
              Manna Farming is more than a facility; it is a promise. As a woman-owned and veteran-operated collective, we bring a level of discipline and compassion that is rare in modern commerce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-50">
              <div>
                <h4 className="text-[9px] kerning-luxury text-[#8B6D31] uppercase mb-3 font-bold">Integrity</h4>
                <p className="text-xs text-gray-400 font-light">Honoring our agricultural roots with every harvest.</p>
              </div>
              <div>
                <h4 className="text-[9px] kerning-luxury text-[#8B6D31] uppercase mb-3 font-bold">Precision</h4>
                <p className="text-xs text-gray-400 font-light">Combining science with the art of natural care.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] bg-[#2E4D3E] flex items-center justify-center p-12 md:p-16 shadow-[60px_60px_120px_-30px_rgba(0,0,0,0.1)]">
               <div className="absolute inset-4 border border-white/10"></div>
               <div className="text-center z-10">
                 <p className="font-serif text-2xl md:text-4xl text-white italic leading-tight">"A commitment to the soul of our community."</p>
                 <div className="w-10 h-px bg-[#C5A059] mx-auto mt-8"></div>
                 <p className="text-[8px] text-[#C5A059] uppercase tracking-widest mt-4">Danny Davis</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#FDFBF7] py-32 md:py-48 px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2E4D3E] leading-tight">Rooted in <br /> <span className="italic">Compassion.</span></h2>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Our vision is simple: to ensure that premium botanical relief is accessible, consistent, and produced with the highest ethical standards in the state of Mississippi.
          </p>
          <div className="w-px h-24 bg-[#2E4D3E]/10 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
