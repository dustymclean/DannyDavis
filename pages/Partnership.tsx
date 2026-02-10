
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
      <section className="pt-24 pb-24 px-8 md:px-20 overflow-hidden" aria-labelledby="partnership-hero">
        <div className="max-w-[1500px] mx-auto">
          <div className={`transition-all duration-[2000ms] cubic-bezier(0.19, 1, 0.22, 1) transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-6 mb-10">
              <span className="text-[9px] kerning-luxury text-[#8B6D31] uppercase font-black">Mississippi's Medical Standard</span>
              <div className="w-16 h-px bg-[#C5A059]/30" aria-hidden="true"></div>
            </div>
            <h1 id="partnership-hero" className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0F0F0F] leading-[0.9] tracking-tighter mb-12">
              Patient First. <br />
              <span className="italic text-[#2E4D3E] font-medium">Always.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed italic">
              Experience the Mississippi standard of botanical relief. Clean, consistent, and cultivated with the precision of a veteran's discipline for those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* The Patient Promise */}
      <section className="py-24 md:py-32 px-8 md:px-20 bg-white border-y border-gray-50" aria-label="Our Patient Promises">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          <div className="space-y-8">
            <span className="font-mono text-[9px] text-[#8B6D31] uppercase tracking-widest font-bold">Purity & Prowess</span>
            <h2 className="text-3xl font-serif text-[#2E4D3E]">Clean Green.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-base">
              Every flower is a testament to our commitment to purity. We avoid harsh chemicals and utilize medical-grade infrastructure to ensure your relief is untainted and effective.
            </p>
          </div>

          <div className="space-y-8">
            <span className="font-mono text-[9px] text-[#8B6D31] uppercase tracking-widest font-bold">Consistency in Care</span>
            <h2 className="text-3xl font-serif text-[#2E4D3E]">Veteran Grown.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-base">
              Military discipline meets master cultivation. Our veteran-operated facility guarantees a consistent experience, harvest after harvest, so your medical regimen remains stable.
            </p>
          </div>

          <div className="space-y-8">
            <span className="font-mono text-[9px] text-[#8B6D31] uppercase tracking-widest font-bold">Community Stewardship</span>
            <h2 className="text-3xl font-serif text-[#2E4D3E]">Rooted Locally.</h2>
            <p className="text-gray-500 leading-relaxed font-light text-base">
              Manna is woman-owned and operated right here in Mississippi. By choosing us, you aren't just choosing medicine; you're supporting a local legacy dedicated to the state's health.
            </p>
          </div>
        </div>
      </section>

      {/* Demand Integrity */}
      <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FDFBF7]" aria-labelledby="demand-integrity-heading">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="space-y-12">
              <h2 id="demand-integrity-heading" className="text-5xl md:text-7xl font-serif text-[#0F0F0F] leading-tight">Demand <span className="italic text-[#2E4D3E]">Integrity.</span></h2>
              <div className="w-20 h-px bg-[#C5A059]" aria-hidden="true"></div>
              <div className="space-y-6 max-w-lg">
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  You deserve clean, patient-first botanical relief. If your local dispensary doesn't stock Manna, <span className="text-[#2E4D3E] font-medium italic">tell them.</span>
                </p>
                <div className="p-8 border border-[#2E4D3E]/10 bg-white shadow-sm rounded-2xl">
                  <h3 className="font-serif text-xl text-[#2E4D3E] mb-3 italic">How to Ask for Manna:</h3>
                  <p className="text-gray-500 font-light text-sm mb-4">Ask your budtender: "Do you carry Manna Farming? I'm looking for veteran-grown, medical-grade small batch flower."</p>
                  <p className="text-[9px] kerning-luxury text-[#8B6D31] uppercase font-bold">Your Voice Defines the Market.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="bg-[#2E4D3E] p-12 md:p-20 shadow-[40px_40px_80px_-20px_rgba(46,77,62,0.15)] rounded-[3rem] text-[#FDFBF7]">
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-[#C5A059] rounded-full flex items-center justify-center rotate-12 shadow-xl" aria-hidden="true">
                <span className="text-white font-serif text-sm md:text-lg italic text-center leading-tight">Patient <br/> Choice</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif mb-10 italic leading-tight">The Manna Standard.</h3>
              <ul className="space-y-8" aria-label="Key Standards">
                {[
                  { title: "Lab-Tested Transparency", desc: "Full COAs available for every single batch." },
                  { title: "Zero Pesticide Policy", desc: "Biological controls and environmental hygiene only." },
                  { title: "Therapeutic Terpenes", desc: "Harvested at peak maturity for maximum efficacy." }
                ].map((item, i) => (
                  <li key={i} className="flex space-x-5">
                    <span className="text-[#C5A059] font-serif text-2xl italic" aria-hidden="true">{i+1}.</span>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-[#FDFBF7]/60 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient FAQ Section */}
      <section className="py-24 md:py-32 px-8 md:px-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#8B6D31] text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">Patient Inquiries</span>
            <h2 id="faq-heading" className="text-4xl md:text-6xl font-serif text-[#0F0F0F] mb-6">Common <span className="italic text-[#2E4D3E]">Questions.</span></h2>
            <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
              Understanding your medicine is the first step toward effective relief. Here is why patients continue to choose the Manna standard.
            </p>
          </div>

          <div className="space-y-4">
            {patientFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group border border-gray-100 rounded-2xl transition-all duration-700 ${openFaq === idx ? 'bg-[#FDFBF7] shadow-sm' : 'bg-white hover:border-[#2E4D3E]/10'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-8 md:p-10 flex justify-between items-center focus:outline-none focus:ring-inset focus:ring-2 focus:ring-[#2E4D3E] rounded-2xl"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <h3 className={`text-xl md:text-2xl font-serif transition-colors duration-500 ${openFaq === idx ? 'text-[#2E4D3E]' : 'text-[#0F0F0F]'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-2xl font-light transform transition-transform duration-700 ${openFaq === idx ? 'rotate-45 text-[#8B6D31]' : 'text-[#2E4D3E]/20'}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 md:px-10 pb-8">
                    <div className="w-10 h-px bg-[#C5A059]/30 mb-6" aria-hidden="true"></div>
                    <p className="text-base text-gray-500 font-light leading-relaxed max-w-2xl">
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
      <section className="py-24 md:py-32 px-8 md:px-20 bg-[#FDFBF7] border-t border-gray-100" aria-labelledby="partnership-retail-heading">
        <div className="max-w-[1500px] mx-auto text-center mb-20">
          <span className="text-[#8B6D31] text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">Retail Partnership</span>
          <h2 id="partnership-retail-heading" className="text-4xl md:text-6xl font-serif text-[#0F0F0F]">Elevate Your <span className="italic text-[#2E4D3E]">Dispensary.</span></h2>
        </div>
        
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 md:p-16 border border-gray-50 bg-white flex flex-col justify-between group hover:border-[#C5A059]/30 transition-all duration-700 rounded-[2rem] shadow-sm">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#2E4D3E]">Wholesale Opportunities</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-10">We provide our partners with marketing support, education, and consistent supply chains. Join a network that prioritizes long-term success over short-term volume.</p>
                </div>
                <div className="w-10 h-px bg-[#2E4D3E] group-hover:w-full transition-all duration-1000" aria-hidden="true"></div>
            </div>
            <div className="p-10 md:p-16 border border-gray-50 bg-white flex flex-col justify-between group hover:border-[#C5A059]/30 transition-all duration-700 rounded-[2rem] shadow-sm">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#2E4D3E]">Facility Integration</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-10">Our seed-to-sale transparency ensures your compliance is never in question. We offer full digital integration for effortless inventory management.</p>
                </div>
                <div className="w-10 h-px bg-[#2E4D3E] group-hover:w-full transition-all duration-1000" aria-hidden="true"></div>
            </div>
        </div>
      </section>

      {/* Final Dialogue Section */}
      <section id="connect" className="py-32 md:py-48 bg-[#FDFBF7] overflow-hidden relative" aria-labelledby="connect-heading">
         <div className="max-w-4xl mx-auto text-center mb-16 px-8">
            <h2 id="connect-heading" className="text-5xl md:text-7xl font-serif text-[#0F0F0F] mb-10">Let's <span className="italic text-[#2E4D3E]">Connect.</span></h2>
            <p className="text-gray-600 font-light text-xl max-w-xl mx-auto leading-relaxed">Whether you are a patient looking for relief or a dispensary looking for a partner, the legacy begins with a conversation.</p>
         </div>
         <div className="flex justify-center">
            <ContactCard />
         </div>
      </section>
    </div>
  );
};

export default Partnership;
