
import React from 'react';
import { Link } from 'react-router-dom';

const Facility: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero */}
      <section className="pt-40 pb-32 px-8 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
            <div className="max-w-2xl">
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-black mb-8 block font-sans">Infrastructural Excellence</span>
              <h1 className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter leading-none">
                State of <br />
                <span className="italic text-[#2E4D3E]">the Art.</span>
              </h1>
            </div>
            <div className="max-w-sm border-l border-[#C5A059]/30 pl-10 pb-4">
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
                Mississippi's premier veteran-operated cultivation processing facility. Where heritage meets medical-grade botanical precision.
              </p>
              <Link 
                to="/partner" 
                className="text-[#2E4D3E] font-bold text-[10px] uppercase tracking-widest border-b border-[#2E4D3E] pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all inline-block"
              >
                Request Facility Tour
              </Link>
            </div>
          </div>

          {/* Luxury Gallery Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 aspect-[16/9] bg-[#2E4D3E] flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-[2000ms]"></div>
              <div className="text-center z-10 space-y-4 px-12">
                <h3 className="font-serif text-4xl md:text-6xl text-[#FDFBF7] italic">Climate Precision</h3>
                <p className="text-[#C5A059] uppercase tracking-[0.6em] text-[10px] font-bold">Total Environmental Control</p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              <div className="bg-[#2E4D3E]/[0.02] border border-gray-100 p-12 flex flex-col justify-between">
                <span className="font-mono text-[10px] text-[#C5A059]">CAPACITY // 01</span>
                <div>
                  <h4 className="font-serif text-3xl mb-4">Small Batch Focus</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Artisanal quantities ensuring focused attention on terpene preservation.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-100 p-12 flex flex-col justify-between shadow-sm">
                <span className="font-mono text-[10px] text-[#C5A059]">COMPLIANCE // 02</span>
                <div>
                  <h4 className="font-serif text-3xl mb-4 text-[#2E4D3E]">Secure Integrity</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Biometric access and real-time state seed-to-sale integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Partnership CTA */}
      <section className="py-60 px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">Exclusive Distribution</span>
          <h2 className="text-6xl font-serif text-[#2E4D3E] mb-12 italic">Join the Legacy.</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-16">
            We are currently vetting select retail partners for our harvest cycles. Partner with a brand that values quality over volume.
          </p>
          <Link 
            to="/partner" 
            className="inline-block bg-[#2E4D3E] text-white px-16 py-6 text-[10px] kerning-loose uppercase shadow-xl hover:bg-[#C5A059] transition-all duration-700"
          >
            Apply for Wholesale Access
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Facility;
