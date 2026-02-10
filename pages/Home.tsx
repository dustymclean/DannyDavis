
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero: Minimal, Bold, Expensive */}
      <section className="relative min-h-[95vh] flex items-center px-8 md:px-20 overflow-hidden bg-[#FDFBF7]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2E4D3E]/[0.015] font-serif text-[45vw] select-none pointer-events-none italic">
          Manna
        </div>

        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-9">
            <div className={`transition-all duration-[2500ms] cubic-bezier(0.19, 1, 0.22, 1) transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center space-x-8 mb-16">
                <span className="text-[11px] kerning-luxury text-[#C5A059] uppercase font-semibold">01 // The Legacy of stewardship</span>
                <div className="w-24 h-px bg-[#C5A059]/40"></div>
              </div>
              
              <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-serif leading-[0.82] mb-16 tracking-tighter text-[#0F0F0F]">
                Cultivated <br />
                <span className="italic text-[#2E4D3E] font-medium ml-4 md:ml-20">with Love.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-end space-y-12 md:space-y-0 md:space-x-24">
                <div className="max-w-md border-l border-gray-100 pl-12 py-2">
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8">
                    Danny Davis leads a symphony of natural wisdom and medical precision, crafting a botanical legacy in Mississippi.
                  </p>
                  <Link 
                    to="/about" 
                    className="text-[10px] kerning-luxury uppercase text-[#2E4D3E] font-bold gold-underline pb-1"
                  >
                    Read the Manifesto
                  </Link>
                </div>
                
                <Link 
                  to="/connect" 
                  className="group relative px-16 py-8 bg-[#2E4D3E] text-[#FDFBF7] text-[10px] kerning-luxury uppercase overflow-hidden shadow-2xl"
                >
                  <span className="relative z-10">Partner with us</span>
                  <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1)"></div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 hidden lg:flex justify-end">
             <div className="relative w-full aspect-[2/3] bg-white shadow-[80px_80px_150px_-30px_rgba(46,77,62,0.1)] group overflow-hidden border border-gray-100/50">
                <div className="absolute inset-0 bg-[#2E4D3E]/[0.03]"></div>
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-[4000ms] group-hover:scale-110"
                  style={{ transform: `translateY(${offset * -0.15}px)` }}
                >
                   <span className="font-serif text-[30rem] text-[#2E4D3E]/[0.06] italic select-none">M</span>
                </div>
                <div className="absolute bottom-16 left-12">
                   <p className="font-serif text-3xl italic text-[#2E4D3E] leading-none mb-2">Purity</p>
                   <span className="text-[9px] kerning-luxury text-gray-300 uppercase block">Seed to Patient</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Asymmetrical Detail Section */}
      <section className="py-64 md:py-96 px-8 md:px-20 bg-white">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          <div className="lg:col-span-5 lg:sticky top-40 h-fit space-y-16">
            <h2 className="text-5xl md:text-8xl font-serif text-[#0F0F0F] leading-[0.95] tracking-tighter">
              An <br />
              <span className="italic font-medium text-[#C5A059]">Unhurried</span> <br />
              Standard.
            </h2>
            <div className="w-20 h-0.5 bg-[#2E4D3E]"></div>
            <p className="text-gray-400 font-light leading-relaxed text-xl max-w-sm">
              In a industry of speed, we choose rhythm. Our cultivation cadence is measured by patient outcomes, not production cycles.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-48 md:space-y-72">
            {[
              { title: 'Generational Oversight', num: '01', desc: 'Direct accountability at every phase. Danny Davis personally oversees the environmental balance of every harvest.' },
              { title: 'Botanical Precision', num: '02', desc: 'Medical-grade infrastructure designed for terpene preservation and genetic integrity.' },
              { title: 'Veteran Discipline', num: '03', desc: 'Service-oriented leadership that prioritizes community health and absolute compliance.' }
            ].map((item, idx) => (
              <div key={idx} className="group border-b border-gray-50 pb-24 transition-all duration-700 hover:border-[#C5A059]/20">
                <span className="font-mono text-[10px] text-[#C5A059] kerning-luxury mb-12 block">{item.num} // CORE ESSENCE</span>
                <h3 className="text-4xl md:text-6xl font-serif mb-10 text-[#0F0F0F] group-hover:italic group-hover:text-[#2E4D3E] transition-all duration-700">{item.title}</h3>
                <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Quiet Manifesto */}
      <section className="bg-[#2E4D3E] py-72 md:py-[30rem] px-8 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/linen.png')]"
          style={{ transform: `scale(${1 + offset * 0.0001})` }}
        ></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl md:text-9xl text-[#FDFBF7] leading-[1.05] mb-24 italic font-extralight tracking-tight opacity-90">
            "Quality is the silent <br className="hidden md:block" /> result of devotion."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-px h-32 bg-[#C5A059]/30 mb-12"></div>
            <p className="text-[#C5A059] kerning-luxury text-[11px] uppercase font-black">Danny Davis</p>
            <p className="text-[#FDFBF7]/30 text-[9px] italic mt-4 uppercase tracking-[0.4em]">Founder & Master Operator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
