import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

// Direct Image Imports
import HandPaintedImg from '../Assets/Design/Design3.jpeg';
import PatchworkImg from '../Assets/Patchwork & Appliqué.jpeg';
import EmbroideryImg from '../Assets/Gallary/Gallary3.jpeg';
import CustomizeImg from '../Assets/Customize/Customize.jpeg';
import BespokeImg from '../Assets/Gallary/Gallary1.jpeg';
import Customize1Img from '../Assets/Customize/Customize1.jpeg';

export default function Services() {
  const navigate = useNavigate();
  const servicesList = [
    {
      id: "srv-1",
      number: "01",
      title: "Hand-Painted Garments",
      description: "Turn denim, jackets, shirts, and other suitable garments into wearable artwork. We can explore illustrations, florals, characters, lettering, graphic elements, or a theme that has personal meaning to you. The final concept is discussed around the garment and your reference ideas.",
      badge: "Popular",
      image: HandPaintedImg
    },
    {
      id: "srv-2",
      number: "02",
      title: "Patchwork & Appliqué",
      description: "Bring new texture and visual interest to a garment with fabric shapes, layered details, contrast panels, and appliqué. We can discuss placement, colour combinations, and how the added elements can complement the original piece.",
      badge: "Trending",
      image: PatchworkImg
    },
    {
      id: "srv-3",
      number: "03",
      title: "Customized Embroidery",
      description: "Add a personal touch with stitched motifs, names, lettering, symbols, and decorative details. The scale and placement are considered in relation to the garment so the finished work feels intentional and balanced.",
      badge: "Bespoke",
      image: EmbroideryImg
    },
    {
      id: "srv-4",
      number: "04",
      title: "Customized Accessories",
      description: "Explore custom artwork for suitable accessories such as tote bags, sneakers, and other items. Share the item and your idea with us so we can discuss the material, usable surface, and an appropriate creative approach.",
      badge: "Accessories",
      image: CustomizeImg
    },
    {
      id: "srv-5",
      number: "05",
      title: "Bespoke Design & Personalization",
      description: "Have an idea but not a finished design? We can develop a direction together using your references, interests, colour preferences, and inspiration. Each concept is discussed individually to keep the result connected to your vision.",
      badge: "Custom Vision",
      image: BespokeImg
    },
    {
      id: "srv-6",
      number: "06",
      title: "Creative Garment Transformation",
      description: "Give a familiar piece a different look by adding artwork, decorative details, or creative fabric treatments. We first consider the garment's current condition and material, then discuss suitable ways to refresh its appearance.",
      badge: "Upcycle & Transform",
      image: Customize1Img
    }
  ];

  return (
    <div className="w-full space-y-0">
      
      {/* SECTION 1: Page Header Banner */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-b border-[#C5C6C7]/10">
        <div className="w-full text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-bold">What We Offer</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">Our Customization Services</h1>
          <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At customize_ans, we transform your ideas into wearable art through creativity, craftsmanship, and personal expression.
          </p>
        </div>
      </section>

      {/* SECTION 2: All Services Grid */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#1E3A8A] transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#1F2833] relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#0B0C10]/90 text-[#1E3A8A] text-xs px-3 py-1 rounded-full font-bold border border-[#C5C6C7]/20">
                    {service.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#1E3A8A] font-mono">{service.number}.</span>
                  <h3 className="text-xl font-bold text-black leading-tight">{service.title}</h3>
                </div>

                <p className="text-black text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] text-[#16756F] font-semibold">Bespoke Garment Work</span>
                <button
                  onClick={() => navigate('/contact', { state: { service: service.title } })}
                  className="px-5 py-2.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-xs shadow-md hover:scale-105 transition-transform"
                >
                  Inquire & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: How Custom Orders Work */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#1E3A8A] font-bold">From Idea to Artwork</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">How a Custom Project Comes Together</h2>
            <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">Every garment and idea is different. We use a collaborative inquiry process to understand the piece and discuss a suitable creative direction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#1F2833] border border-[#C5C6C7]/15 p-7 space-y-3">
              <span className="text-3xl font-black text-[#1E3A8A]">01</span>
              <h3 className="text-white text-xl font-bold">Tell Us About Your Item</h3>
              <p className="text-[#C5C6C7] text-sm leading-relaxed">Choose a service and share the type of garment or accessory, its material if known, its condition, and a few clear photos.</p>
            </div>
            <div className="rounded-2xl bg-[#1F2833] border border-[#C5C6C7]/15 p-7 space-y-3">
              <span className="text-3xl font-black text-[#1E3A8A]">02</span>
              <h3 className="text-white text-xl font-bold">Discuss the Design</h3>
              <p className="text-[#C5C6C7] text-sm leading-relaxed">Share inspiration and preferred details. We can discuss suitable techniques, placement, and the practical considerations for your item.</p>
            </div>
            <div className="rounded-2xl bg-[#1F2833] border border-[#C5C6C7]/15 p-7 space-y-3">
              <span className="text-3xl font-black text-[#1E3A8A]">03</span>
              <h3 className="text-white text-xl font-bold">Confirm the Project</h3>
              <p className="text-[#C5C6C7] text-sm leading-relaxed">Review the proposed direction and agreed project details with the studio before the customization work begins.</p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={() => navigate('/contact')} className="px-7 py-3.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform">
              Tell Us About Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Service Assurance Banner */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="w-full grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#1E3A8A] mx-auto" />
            <h4 className="text-white font-bold text-sm">Customer Garments</h4>
            <p className="text-[#C5C6C7] text-xs">We customize your own provided clothing pieces.</p>
          </div>
          <div className="space-y-2">
            <Sparkles className="w-8 h-8 text-[#1E3A8A] mx-auto" />
            <h4 className="text-white font-bold text-sm">Original Artwork</h4>
            <p className="text-[#C5C6C7] text-xs">Hand-painted, embroidered, and patched by hand.</p>
          </div>
          <div className="space-y-2">
            <ArrowRight className="w-8 h-8 text-[#1E3A8A] mx-auto" />
            <h4 className="text-white font-bold text-sm">Direct Consultation</h4>
            <p className="text-[#C5C6C7] text-xs">Review design proofs before painting begins.</p>
          </div>
        </div>
      </section>

    </div>
  );
}