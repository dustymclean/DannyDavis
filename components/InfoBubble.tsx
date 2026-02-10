
import React, { useState } from 'react';

const InfoBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "notary@northmsnotary.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[150]">
      {/* Popover */}
      <div 
        id="info-popover"
        className={`absolute bottom-20 right-0 w-80 md:w-96 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-3xl border border-gray-100/50 p-10 transition-all duration-1000 cubic-bezier(0.2, 0, 0, 1) transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        role="complementary"
        aria-label="Creator Information"
      >
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-[#C5A059]" aria-hidden="true"></div>
            <span className="text-[9px] kerning-luxury text-[#A67C37] uppercase">The Architect</span>
          </div>
          
          <h4 className="font-serif text-2xl text-[#2E4D3E] italic font-medium leading-tight">Elevate Your Digital Presence.</h4>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Are you looking to redefine your professional identity? I craft bespoke, luxury digital experiences like Danny's for high-end brands.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Reach out to <span className="text-[#2E4D3E] font-medium italic underline decoration-[#C5A059]/30 underline-offset-4">Dusty McLean</span> to begin your transformation.
            </p>
          </div>

          <div className="pt-6 flex flex-col space-y-5">
            <div className="relative group">
              <button 
                onClick={handleCopyEmail}
                className="text-[10px] kerning-luxury uppercase text-[#2E4D3E] border-b border-[#2E4D3E]/10 pb-2 hover:border-[#C5A059] transition-all inline-block w-fit text-left focus:outline-none"
                aria-label="Copy architect email address"
              >
                {copied ? (
                  <span className="text-[#C5A059] animate-pulse">Email copied to clipboard</span>
                ) : (
                  <span>notary@northmsnotary.com</span>
                )}
              </button>
            </div>
            <a 
              href="https://northmsnotary.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] kerning-luxury uppercase text-[#2E4D3E] border-b border-[#2E4D3E]/10 pb-2 hover:border-[#C5A059] transition-all inline-block w-fit"
            >
              northmsnotary.com
            </a>
          </div>
        </div>
        
        {/* Triangle tail */}
        <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white border-r border-b border-gray-100/50 rotate-45" aria-hidden="true"></div>
      </div>

      {/* Bubble Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-1000 shadow-2xl group border ${
          isOpen 
            ? 'bg-[#2E4D3E] border-[#2E4D3E] text-white rotate-180' 
            : 'bg-white border-gray-100 text-[#2E4D3E] hover:border-[#C5A059]'
        }`}
        aria-label={isOpen ? "Close creator info" : "Open creator info"}
        aria-expanded={isOpen}
        aria-controls="info-popover"
      >
        <span className={`font-serif text-2xl tracking-tighter transition-all duration-700 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} aria-hidden="true">
          i
        </span>
        <span className={`absolute font-serif text-2xl transition-all duration-700 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} aria-hidden="true">
          ×
        </span>
      </button>
    </div>
  );
};

export default InfoBubble;
