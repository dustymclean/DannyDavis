
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E4D3E] text-[#FDFBF7] py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/linen.png')]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div>
          <h3 className="font-serif text-3xl mb-6 italic">Rooted in Mississippi.</h3>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            Family owned and operated. We bridge the gap between traditional agricultural values and modern cultivation excellence.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Compliance & Trust</h4>
          <p className="text-sm opacity-80">Mississippi State Certified</p>
          <p className="text-sm opacity-80">Full Chain of Custody Documentation</p>
          <p className="text-sm opacity-80">Premium Medical Grade Standards</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Direct Correspondence</h4>
          <p className="text-lg font-serif">{CONTACT_INFO.NAME}</p>
          <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-sm opacity-80 hover:text-[#C5A059] transition-colors">
            {CONTACT_INFO.EMAIL}
          </a>
          <div className="pt-8 flex flex-col space-y-1">
            <p className="text-[10px] opacity-40 uppercase tracking-widest">
              © {new Date().getFullYear()} Manna Farming.
            </p>
            <p className="text-[9px] opacity-30 italic">
              Made with love by Dusty McLean, The North Mississippi Notary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
