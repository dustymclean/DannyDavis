
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
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-16 overflow-hidden bg-[#FDFBF7]" aria-labelledby="hero-title">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2E4D3E]/[0.012] font-serif text-[35vw] select-none pointer-events-none italic" role="presentation">
          Manna
        </div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-9">
            <div className={`transition-all duration-[2500ms] cubic-bezier(0.19, 1, 0.22, 1) transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-[9px] kerning-luxury text-[#8B6D31] uppercase font-bold">01 // The Legacy of stewardship</span>
                <div className="w-12 h-px bg-[#C5A059]/40" aria-hidden="true"></div>
              </div>
              
              <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[0.95] mb-10 tracking-tighter text-[#0F0F0F]">
                Cultivated <br />
                <span className="italic text-[#2E4D3E] font-medium ml-4 md:ml-10">with Love.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-end space-y-8 md:space-y-0 md:space-x-16">
                <div className="max-w-sm border-l border-gray-100 pl-6 py-1">
                  <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-6">
                    Danny Davis leads a symphony of natural wisdom and medical precision, crafting a botanical legacy in Mississippi.
                  </p>
                  <Link 
                    to="/about" 
                    className="text-[8px] kerning-luxury uppercase text-[#2E4D3E] font-bold gold-underline pb-1 focus:outline-none focus:ring-2 focus:ring-[#2E4D3E] focus:ring-offset-4 rounded"
                  >
                    Read the Manifesto
                  </Link>
                </div>
                
                <Link 
                  to="/connect" 
                  className="group relative px-10 py-5 bg-[#2E4D3E] text-[#FDFBF7] text-[8px] kerning-luxury uppercase overflow-hidden shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2E4D3E] focus:ring-offset-4"
                >
                  <span className="relative z-10">Partner with us</span>
                  <div className="absolute inset-0 bg-[#8B6D31] translate-y-full group-hover:translate-y-0 transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1)" aria-hidden="true"></div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 hidden lg:flex justify-end">
             <div className="relative w-full aspect-[3/4] max-w-[240px] bg-white shadow-[30px_30px_80px_-20px_rgba(46,77,62,0.1)] group overflow-hidden border border-gray-100/50">
                <div className="absolute inset-0 bg-[#2E4D3E]/[0.03]" aria-hidden="true"></div>
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-[4000ms] group-hover:scale-105"
                  style={{ transform: `translateY(${offset * -0.08}px)` }}
                  aria-hidden="true"
                >
                   <span className="font-serif text-[15rem] text-[#2E4D3E]/[0.05] italic select-none">M</span>
                </div>
                <div className="absolute bottom-8 left-6">
                   <p className="font-serif text-xl italic text-[#2E4D3E] leading-none mb-1">Purity</p>
                   <span className="text-[7px] kerning-luxury text-gray-400 uppercase block font-bold">Seed to Patient</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky top-32 h-fit space-y-10">
            <h2 id="detail-heading" className="text-3xl md:text-6xl font-serif text-[#0F0F0F] leading-[1.05] tracking-tighter">
              An <br />
              <span className="italic font-medium text-[#8B6D31]">Unhurried</span> <br />
              Standard.
            </h2>
            <div className="w-12 h-0.5 bg-[#2E4D3E]" aria-hidden="true"></div>
            <p className="text-gray-500 font-light leading-relaxed text-base max-w-xs">
              In a industry of speed, we choose rhythm. Our cultivation cadence is measured by patient outcomes, not production cycles.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-24 md:space-y-32">
            {[
              { title: 'Generational Oversight', num: '01', desc: 'Direct accountability at every phase. Danny Davis personally oversees the environmental balance of every harvest.' },
              { title: 'Botanical Precision', num: '02', desc: 'Medical-grade infrastructure designed for terpene preservation and genetic integrity.' },
              { title: 'Veteran Discipline', num: '03', desc: 'Service-oriented leadership that prioritizes community health and absolute compliance.' }
            ].map((item, idx) => (
              <div key={idx} className="group border-b border-gray-50 pb-12 transition-all duration-700 hover:border-[#C5A059]/20">
                <span className="font-mono text-[8px] text-[#8B6D31] kerning-luxury mb-6 block font-bold">{item.num} // CORE ESSENCE</span>
                <h3 className="text-2xl md:text-4xl font-serif mb-4 text-[#0F0F0F] group-hover:italic group-hover:text-[#2E4D3E] transition-all duration-700">{item.title}</h3>
                <p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed max-w-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Quiet Manifesto */}
      <section className="bg-[#2E4D3E] py-32 md:py-48 px-6 text-center relative overflow-hidden" aria-labelledby="manifesto-heading">
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/linen.png')]"
          style={{ transform: `scale(${1 + offset * 0.00004})` }}
          aria-hidden="true"
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 id="manifesto-heading" className="font-serif text-2xl md:text-6xl text-[#FDFBF7] leading-[1.15] mb-12 italic font-extralight tracking-tight opacity-90">
            "Quality is the silent <br className="hidden md:block" /> result of devotion."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-px h-20 bg-[#C5A059]/30 mb-6" aria-hidden="true"></div>
            <p className="text-[#C5A059] kerning-luxury text-[9px] uppercase font-black">Danny Davis</p>
            <p className="text-[#FDFBF7]/30 text-[7px] italic mt-1 uppercase tracking-[0.4em]">Founder & Master Operator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
