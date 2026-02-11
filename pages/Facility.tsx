
import React from 'react';
import { Link } from 'react-router-dom';

const Facility: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-lg">
              <span className="text-[#8B6D31] text-[8px] uppercase tracking-[0.4em] font-black mb-4 block font-sans">Infrastructural Excellence</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tighter leading-[1.1]">
                State of <br />
                <span className="italic text-[#2E4D3E]">the Art.</span>
              </h1>
            </div>
            <div className="max-w-sm border-l border-[#C5A059]/30 pl-6 pb-2">
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
                Mississippi's premier veteran-operated cultivation processing facility. Where heritage meets medical-grade botanical precision.
              </p>
              <Link 
                to="/partner" 
                className="text-[#2E4D3E] font-bold text-[8px] uppercase tracking-widest border-b border-[#2E4D3E] pb-1.5 hover:text-[#C5A059] hover:border-[#C5A059] transition-all inline-block"
              >
                Request Facility Tour
              </Link>
            </div>
          </div>

          {/* Luxury Gallery Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8 aspect-[21/9] bg-[#2E4D3E] flex items-center justify-center relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-105 transition-transform duration-[2000ms]"></div>
              <div className="text-center z-10 space-y-2 px-8">
                <h3 className="font-serif text-2xl md:text-4xl text-[#FDFBF7] italic">Climate Precision</h3>
                <p className="text-[#C5A059] uppercase tracking-[0.6em] text-[8px] font-bold">Total Environmental Control</p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-1 gap-5">
              <div className="bg-[#2E4D3E]/[0.02] border border-gray-100 p-8 flex flex-col justify-between">
                <span className="font-mono text-[8px] text-[#8B6D31] font-bold">CAPACITY // 01</span>
                <div>
                  <h4 className="font-serif text-xl mb-2">Small Batch Focus</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Artisanal quantities ensuring focused attention on terpene preservation.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-100 p-8 flex flex-col justify-between shadow-sm">
                <span className="font-mono text-[8px] text-[#8B6D31] font-bold">COMPLIANCE // 02</span>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-[#2E4D3E]">Secure Integrity</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Biometric access and real-time state seed-to-sale integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Partnership CTA */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#8B6D31] text-[8px] uppercase tracking-[0.5em] font-bold mb-5 block">Exclusive Distribution</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2E4D3E] mb-6 italic">Join the Legacy.</h2>
          <p className="text-base text-gray-400 font-light leading-relaxed mb-10">
            We are currently vetting select retail partners for our harvest cycles. Partner with a brand that values quality over volume.
          </p>
          <Link 
            to="/partner" 
            className="inline-block bg-[#2E4D3E] text-white px-10 py-4 text-[8px] kerning-luxury uppercase shadow-lg hover:bg-[#C5A059] transition-all duration-700"
          >
            Apply for Wholesale Access
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Facility;
