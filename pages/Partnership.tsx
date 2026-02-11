
import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

const Partnership: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const patientFaqs = [
    {
      question: "What distinguishes Manna from other botanical brands?",
      answer: "Manna isn't just a product; it's a protocol. We combine veteran-led operational discipline with medical-grade infrastructure. Our small-batch approach means every flower receives individual attention, ensuring a level of purity and terpene density that mass-produced brands simply cannot match."
    },
    {
      question: "How do I know Manna products are safe and clean?",
      answer: "Transparency is our baseline. Every single batch we produce undergoes rigorous third-party laboratory testing. We maintain a strict zero-pesticide policy, utilizing biological controls and advanced environmental management to ensure your relief is free from heavy metals, molds, and harmful chemicals."
    },
    {
      question: "Why should I care that Manna is Veteran-Operated?",
      answer: "For us, 'Veteran-Operated' translates to a culture of accountability. We bring the same mission-first mindset from our service to our cultivation. For patients, this means consistency. You can trust that the relief you find today will be the same quality you find six months from now."
    },
    {
      question: "Is Manna truly a local Mississippi company?",
      answer: "Absolutely. Manna is woman-owned and veteran-operated right here in Mississippi. We aren't a multi-state operator; we are part of your community, dedicated to elevating the standard of care for our fellow Mississippians."
    },
    {
      question: "My dispensary doesn't carry Manna yet. What can I do?",
      answer: "The patient's voice is the most powerful tool in the industry. We encourage you to 'Ask for Manna' during your next visit. Dispensaries prioritize the brands their patients request. By asking for us, you're advocating for cleaner, high-integrity options in your local area."
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-20 pb-16 px-6 md:px-16 overflow-hidden" aria-labelledby="partnership-hero">
        <div className="max-w-[1300px] mx-auto">
          <div className={`transition-all duration-[2000ms] cubic-bezier(0.19, 1, 0.22, 1) transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="flex items-center space-x-5 mb-8">
              <span className="text-[8px] kerning-luxury text-[#8B6D31] uppercase font-black">Mississippi's Medical Standard</span>
              <div className="w-12 h-px bg-[#C5A059]/30" aria-hidden="true"></div>
            </div>
            <h1 id="partnership-hero" className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#0F0F0F] leading-[0.95] tracking-tighter mb-10">
              Patient First. <br />
              <span className="italic text-[#2E4D3E] font-medium">Always.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed italic">
              Experience the Mississippi standard of botanical relief. Clean, consistent, and cultivated with the precision of a veteran's discipline for those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* The Patient Promise */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-white border-y border-gray-50" aria-label="Our Patient Promises">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="space-y-6">
            <span className="font-mono text-[8px] text-[#8B6D31] uppercase tracking-widest font-bold">Purity & Prowess</span>
            <h2 className="text-2xl font-serif text-[#2E4D3E]">Clean Green.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              Every flower is a testament to our commitment to purity. We avoid harsh chemicals and utilize medical-grade infrastructure to ensure your relief is untainted and effective.
            </p>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-[8px] text-[#8B6D31] uppercase tracking-widest font-bold">Consistency in Care</span>
            <h2 className="text-2xl font-serif text-[#2E4D3E]">Veteran Grown.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              Military discipline meets master cultivation. Our veteran-operated facility guarantees a consistent experience, harvest after harvest, so your medical regimen remains stable.
            </p>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-[8px] text-[#8B6D31] uppercase tracking-widest font-bold">Community Stewardship</span>
            <h2 className="text-2xl font-serif text-[#2E4D3E]">Rooted Locally.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              Manna is woman-owned and operated right here in Mississippi. By choosing us, you aren't just choosing medicine; you're supporting a local legacy dedicated to the state's health.
            </p>
          </div>
        </div>
      </section>

      {/* Demand Integrity */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[#FDFBF7]" aria-labelledby="demand-integrity-heading">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="space-y-10">
              <h2 id="demand-integrity-heading" className="text-4xl md:text-6xl font-serif text-[#0F0F0F] leading-tight">Demand <span className="italic text-[#2E4D3E]">Integrity.</span></h2>
              <div className="w-16 h-px bg-[#C5A059]" aria-hidden="true"></div>
              <div className="space-y-5 max-w-md">
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  You deserve clean, patient-first botanical relief. If your local dispensary doesn't stock Manna, <span className="text-[#2E4D3E] font-medium italic">tell them.</span>
                </p>
                <div className="p-6 border border-[#2E4D3E]/10 bg-white shadow-sm rounded-xl">
                  <h3 className="font-serif text-lg text-[#2E4D3E] mb-2 italic">How to Ask for Manna:</h3>
                  <p className="text-gray-500 font-light text-xs mb-3">Ask your budtender: "Do you carry Manna Farming? I'm looking for veteran-grown, medical-grade small batch flower."</p>
                  <p className="text-[8px] kerning-luxury text-[#8B6D31] uppercase font-bold">Your Voice Defines the Market.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="bg-[#2E4D3E] p-10 md:p-16 shadow-[30px_30px_60px_-15px_rgba(46,77,62,0.1)] rounded-[2.5rem] text-[#FDFBF7]">
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-[#C5A059] rounded-full flex items-center justify-center rotate-12 shadow-lg" aria-hidden="true">
                <span className="text-white font-serif text-xs md:text-base italic text-center leading-tight">Patient <br/> Choice</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif mb-8 italic leading-tight">The Manna Standard.</h3>
              <ul className="space-y-6" aria-label="Key Standards">
                {[
                  { title: "Lab-Tested Transparency", desc: "Full COAs available for every single batch." },
                  { title: "Zero Pesticide Policy", desc: "Biological controls and environmental hygiene only." },
                  { title: "Therapeutic Terpenes", desc: "Harvested at peak maturity for maximum efficacy." }
                ].map((item, i) => (
                  <li key={i} className="flex space-x-4">
                    <span className="text-[#C5A059] font-serif text-xl italic" aria-hidden="true">{i+1}.</span>
                    <div>
                      <h4 className="text-base font-medium mb-1">{item.title}</h4>
                      <p className="text-[#FDFBF7]/60 font-light text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient FAQ Section */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B6D31] text-[8px] uppercase tracking-[0.5em] font-bold mb-4 block">Patient Inquiries</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-serif text-[#0F0F0F] mb-4">Common <span className="italic text-[#2E4D3E]">Questions.</span></h2>
            <p className="text-base text-gray-500 font-light max-w-lg mx-auto">
              Understanding your medicine is the first step toward effective relief. Here is why patients continue to choose the Manna standard.
            </p>
          </div>

          <div className="space-y-3">
            {patientFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group border border-gray-100 rounded-xl transition-all duration-700 ${openFaq === idx ? 'bg-[#FDFBF7] shadow-sm' : 'bg-white hover:border-[#2E4D3E]/10'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none focus:ring-inset focus:ring-2 focus:ring-[#2E4D3E] rounded-xl"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <h3 className={`text-lg md:text-xl font-serif transition-colors duration-500 ${openFaq === idx ? 'text-[#2E4D3E]' : 'text-[#0F0F0F]'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-xl font-light transform transition-transform duration-700 ${openFaq === idx ? 'rotate-45 text-[#8B6D31]' : 'text-[#2E4D3E]/20'}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-6">
                    <div className="w-8 h-px bg-[#C5A059]/30 mb-4" aria-hidden="true"></div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale & Dispensary Section */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-[#FDFBF7] border-t border-gray-100" aria-labelledby="partnership-retail-heading">
        <div className="max-w-[1300px] mx-auto text-center mb-16">
          <span className="text-[#8B6D31] text-[8px] uppercase tracking-[0.5em] font-bold mb-4 block">Retail Partnership</span>
          <h2 id="partnership-retail-heading" className="text-3xl md:text-5xl font-serif text-[#0F0F0F]">Elevate Your <span className="italic text-[#2E4D3E]">Dispensary.</span></h2>
        </div>
        
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 md:p-12 border border-gray-50 bg-white flex flex-col justify-between group hover:border-[#C5A059]/30 transition-all duration-700 rounded-[1.5rem] shadow-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-3 text-[#2E4D3E]">Wholesale Opportunities</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mb-8">We provide our partners with marketing support, education, and consistent supply chains. Join a network that prioritizes long-term success over short-term volume.</p>
                </div>
                <div className="w-8 h-px bg-[#2E4D3E] group-hover:w-full transition-all duration-1000" aria-hidden="true"></div>
            </div>
            <div className="p-8 md:p-12 border border-gray-50 bg-white flex flex-col justify-between group hover:border-[#C5A059]/30 transition-all duration-700 rounded-[1.5rem] shadow-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-3 text-[#2E4D3E]">Facility Integration</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mb-8">Our seed-to-sale transparency ensures your compliance is never in question. We offer full digital integration for effortless inventory management.</p>
                </div>
                <div className="w-8 h-px bg-[#2E4D3E] group-hover:w-full transition-all duration-1000" aria-hidden="true"></div>
            </div>
        </div>
      </section>

      {/* Final Dialogue Section */}
      <section id="connect" className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden relative" aria-labelledby="connect-heading">
         <div className="max-w-4xl mx-auto text-center mb-12 px-6">
            <h2 id="connect-heading" className="text-4xl md:text-6xl font-serif text-[#0F0F0F] mb-8">Let's <span className="italic text-[#2E4D3E]">Connect.</span></h2>
            <p className="text-gray-600 font-light text-lg max-w-lg mx-auto leading-relaxed">Whether you are a patient looking for relief or a dispensary looking for a partner, the legacy begins with a conversation.</p>
         </div>
         <div className="flex justify-center">
            <ContactCard />
         </div>
      </section>
    </div>
  );
};

export default Partnership;
