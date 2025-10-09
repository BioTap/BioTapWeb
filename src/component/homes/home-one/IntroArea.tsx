"use client";
import Image from "next/image";
import ScrollAnimation from "@/ui/ScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

import intro_thumb from "@/assets/img/banner/banner_shape02.png";

interface DataType {
   id: number;
   titleKey: string;
   descKey: string;
   icon: string;
   color: string;
   gradient: string;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      titleKey: "intro.who_we_are",
      descKey: "intro.who_we_are_desc",
      icon: "🔐",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #45b7d1)"
   },
   {
      id: 2,
      titleKey: "intro.what_we_do",
      descKey: "intro.what_we_do_desc",
      icon: "👆",
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)"
   },
   {
      id: 3,
      titleKey: "intro.why_it_matters",
      descKey: "intro.why_it_matters_desc",
      icon: "🛡️",
      color: "#96ceb4",
      gradient: "linear-gradient(135deg, #96ceb4, #85c1a3)"
   },
]

const IntroArea = () => {
   const { t } = useLanguage();
   
   return (
      <div className="pt-130 pb-140 overflow-hidden position-relative">
         {/* Background Elements */}
         <div className="intro-bg-elements">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
         </div>

         <div className="container">
            {/* Header Section */}
            <div className="row justify-content-center mb-80">
               <div className="col-lg-8 text-center">
                  <ScrollAnimation animation="fade-in" delay={200}>
                     <div className="intro-header">
                        <h2 className="intro-main-title">
                           <span className="title-line">🌍 About BioTap</span>
                           <span className="title-line gradient-text">Our Core Objectives</span>
                        </h2>
                        <p className="intro-subtitle">At Biotap, we believe the future of finance lies in the power of identity, trust, and technology.</p>
                        <div className="intro-divider"></div>
                     </div>
                  </ScrollAnimation>
               </div>
            </div>

            {/* Main Content Grid */}
            <div className="intro-content-grid">
               {/* Left Side - Feature Cards */}
               <div className="intro-features">
                  {intro_data.map((item, index) => (
                     <ScrollAnimation key={item.id} animation="scale-in" delay={300 + (index * 200)}>
                        <div className="intro-feature-card" style={{'--card-color': item.color, '--card-gradient': item.gradient} as React.CSSProperties}>
                           <div className="feature-card-header">
                              <div className="feature-icon-container">
                                 <span className="feature-icon">{item.icon}</span>
                                 <div className="icon-glow"></div>
                              </div>
                              <h3 className="feature-title">{t(item.titleKey)}</h3>
                           </div>
                           <div className="feature-content">
                              <p className="feature-description" dangerouslySetInnerHTML={{ __html: t(item.descKey) }}></p>
                           </div>
                           <div className="feature-card-border"></div>
                        </div>
                     </ScrollAnimation>
                  ))}
               </div>

               {/* Right Side - Mission & Vision */}
               <div className="intro-mission">
                  <ScrollAnimation animation="slide-in-right" delay={400}>
                     <div className="mission-visual">
                        <div className="visual-container">
                           <Image src={intro_thumb} alt="BioTap Mission" className="mission-image" />
                           <div className="visual-overlay">
                              <div className="pulse-ring"></div>
                              <div className="pulse-ring delay-1"></div>
                              <div className="pulse-ring delay-2"></div>
                           </div>
                        </div>
                     </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fade-in" delay={600}>
                     <div className="mission-content">
                        <div className="mission-header">
                           <div className="mission-icon">🎯</div>
                           <h3 className="mission-title">Our Mission & Vision</h3>
                        </div>
                        
                        <div className="mission-points">
                           <div className="mission-point">
                              <div className="point-indicator"></div>
                              <p className="point-text">At Biotap, our mission is to <span className="highlight-word">revolutionize how people interact with money</span> by blending biometric security, financial intelligence, and seamless user experience.</p>
                           </div>
                           
                           <div className="mission-point">
                              <div className="point-indicator"></div>
                              <p className="point-text">We aim to build a payment ecosystem where every tap, transfer, and verification is powered by <span className="highlight-word">identity — not passwords</span>.</p>
                           </div>
                           
                           <div className="mission-point">
                              <div className="point-indicator"></div>
                              <p className="point-text">Through cutting-edge encryption, AI-driven fraud detection, and inclusive digital banking services, Biotap is committed to creating a world where financial access is <span className="highlight-word">safer, faster, and personalized</span> for everyone.</p>
                           </div>
                        </div>
                     </div>
                  </ScrollAnimation>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
