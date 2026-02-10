
import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactCard: React.FC = () => {
  const generateVCard = (e: React.MouseEvent) => {
    e.preventDefault();
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONTACT_INFO.NAME}`,
      `ORG:${CONTACT_INFO.COMPANY}`,
      `TITLE:${CONTACT_INFO.TITLE}`,
      `EMAIL;TYPE=WORK,INTERNET:${CONTACT_INFO.EMAIL}`,
      `TEL;TYPE=CELL:${CONTACT_INFO.PHONE}`,
      `URL:${CONTACT_INFO.WEBSITE}`,
      `ADR;TYPE=WORK:;;${CONTACT_INFO.LOCATION};;;`,
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Danny_Davis_Manna.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-[380px] bg-white shadow-[0_50px_100px_-30px_rgba(46,77,62,0.15)] rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) hover:scale-[1.01] relative z-10">
        <div className="h-1 w-full bg-[#C5A059]"></div>
        
        <div className="bg-[#2E4D3E] p-10 md:p-12 text-center text-[#FDFBF7] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]">
              <span className="font-serif text-5xl italic select-none">D</span>
            </div>
            <h1 className="font-serif text-4xl mb-2 tracking-tight">Danny Davis</h1>
            <p className="text-[9px] kerning-luxury uppercase opacity-50 font-bold">Master Operator // Manna</p>
          </div>
          
          <div className="absolute -top-6 -right-6 text-white opacity-[0.02]">
             <span className="font-serif italic text-[12rem] select-none">M</span>
          </div>
        </div>
        
        <div className="p-10 md:p-12 space-y-10 bg-white">
            <div className="text-center space-y-4 pb-8 border-b border-gray-50">
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="block text-[#2E4D3E] font-serif italic text-2xl hover:text-[#C5A059] transition-colors duration-700">
                  {CONTACT_INFO.EMAIL}
                </a>
                <p className="text-[9px] text-gray-300 kerning-luxury uppercase">{CONTACT_INFO.LOCATION}</p>
            </div>

            <button 
                onClick={generateVCard}
                className="w-full bg-[#2E4D3E] text-[#FDFBF7] py-6 rounded-full font-bold uppercase tracking-[0.5em] text-[9px] shadow-[0_20px_40px_-10px_rgba(46,77,62,0.25)] hover:bg-[#C5A059] transition-all duration-700 active:scale-95 flex items-center justify-center space-x-4 group"
            >
                <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Save Contact</span>
            </button>

            <div className="flex justify-center space-x-8">
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="group p-4 bg-[#FDFBF7] rounded-full border border-gray-100 hover:border-[#C5A059] transition-all duration-700" aria-label="Email Danny">
                  <svg className="w-5 h-5 text-[#2E4D3E]" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </a>
                <a href={CONTACT_INFO.WEBSITE} target="_blank" rel="noreferrer" className="group p-4 bg-[#FDFBF7] rounded-full border border-gray-100 hover:border-[#C5A059] transition-all duration-700" aria-label="Visit Website">
                  <svg className="w-5 h-5 text-[#2E4D3E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.15.002-.224.006a10.07 10.07 0 01-.274 1.393c-.15.656-.25 1.385-.296 2.148h1.588a10.612 10.612 0 00-.296-2.148 10.07 10.07 0 01-.274-1.393A1.758 1.758 0 0110 4zm4.99 5h-1.947c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.99 9zM4.083 11a6.004 6.004 0 001.91 4.118c.454-1.147.748-2.572.837-4.118H4.083zm7.017 4.118c.454-1.147.748-2.572.837-4.118h1.947a6.004 6.004 0 01-1.91 4.118zM10 16c-.076 0-.15-.002-.224-.006a10.07 10.07 0 01-.274-1.393c-.15-.656-.25-1.385-.296-2.148h1.588a10.612 10.612 0 00-.296-2.148 10.07 10.07 0 01-.274-1.393A1.758 1.758 0 0110 16z" clipRule="evenodd" /></svg>
                </a>
            </div>
            
            <p className="text-[8px] text-gray-200 kerning-luxury uppercase text-center font-black">Digital Business Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
