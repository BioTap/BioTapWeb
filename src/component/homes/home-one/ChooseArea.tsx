import Image, { StaticImageData } from "next/image";
import ScrollAnimation from "@/ui/ScrollAnimation";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"
import choose_thumb_2 from "@/assets/img/banner/banner_shape01.png"

import icon_1 from "@/assets/img/update/icon/feature-icon1-1.svg"
import icon_2 from "@/assets/img/update/icon/feature-icon1-2.svg"
import icon_3 from "@/assets/img/update/icon/feature-icon1-3.svg"

interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: StaticImageData | string;
   title: string;
   price?: string;
   desc: string;
}[];

const biotap_features: DataType2[] = [
   {
      id: 1,
      icon: "👛",
      title: "Identity-Driven Payments",
      desc: "Forget passwords and PINs — Biotap uses your unique biometrics (fingerprint, face, or voice) to authorize every payment instantly. No cards, no codes — just you.",
   },
   {
      id: 2,
      icon: "🛡️",
      title: "Adaptive Fraud Shield",
      desc: "Biotap&apos;s AI-powered fraud detection learns from your transaction behavior in real time. It automatically flags anomalies and locks down suspicious activity before it happens — not after.",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Seamless Cross-Border Identity Banking",
      desc: "With Biotap, your identity works anywhere in the world. Access your account, verify payments, and authenticate transfers globally — without the hassle of traditional verification barriers.",
   },
]

const ChooseArea = () => {
   return (
      <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
         <div className="bg-gradient-1">
            <Image src={choose_thumb_1} alt="img" />
         </div>
         <div className="container">
            <div className="mb-25">
               <div className="row gy-5">
                  <div className="col-lg-7">
                     <ScrollAnimation animation="slide-in-left" delay={200}>
                        <div className="section-title mb-0">
                           <h2 className="title style2 gradient-text hero-title-enhanced">💎 Why Choose Biotap</h2>
                           
                           <div className="enhanced-text-block">
                              <div className="main-statement">
                                 <p className="sec-text enhanced-main-text">
                                    Biotap isn&apos;t just another banking app — it&apos;s a 
                                    <span className="highlight-text"> secure, intelligent, and human-centered</span> 
                                    financial experience.
                                 </p>
                              </div>
                              
                              <div className="elaboration-text">
                                 <p className="sec-text">
                                    We combine 
                                    <span className="interactive-term" data-tooltip="Your unique biometric signature for authentication">biometric identity</span>, 
                                    <span className="interactive-term" data-tooltip="AI-powered automation for seamless transactions">smart automation</span>, and 
                                    <span className="interactive-term" data-tooltip="Real-time monitoring and protection">real-time protection</span> 
                                    to give you control, speed, and confidence in every transaction.
                                 </p>
                              </div>
                              
                              <div className="slogan-container">
                                 <div className="slogan-text">
                                    <span className="slogan-word">Bank</span>
                                    <span className="slogan-word">less.</span>
                                    <span className="slogan-word">Tap</span>
                                    <span className="slogan-word">more.</span>
                                    <span className="slogan-word">Live</span>
                                    <span className="slogan-word">smarter.</span>
                                 </div>
                                 <div className="slogan-underline"></div>
                              </div>
                              
                              <div className="feature-callout">
                                 <div className="gear-icon-container">
                                    <span className="gear-icon">⚙️</span>
                                 </div>
                                 <p className="feature-callout-text">
                                    <strong>3 Exclusive Biotap Features Other Banks Don&apos;t Offer</strong>
                                 </p>
                                 <div className="callout-glow"></div>
                              </div>
                           </div>
                        </div>
                     </ScrollAnimation>
                  </div>
                  <div className="col-lg-5">
                     <ScrollAnimation animation="slide-in-right" delay={400}>
                        <div className="wcu-thumb text-center alltuchtopdown">
                           <Image src={choose_thumb_2} alt="img" />
                        </div>
                     </ScrollAnimation>
                  </div>
               </div>
            </div>
            <div className="row gy-5 justify-content-center">
               <div className="col-lg-10">
                  <div className="biotap-features-grid">
                     {biotap_features.map((item, index) => (
                        <ScrollAnimation key={item.id} animation="scale-in" delay={index * 200}>
                           <div className="biotap-feature-card feature-card-enhanced">
                              <div className="feature-number">{index + 1}</div>
                              <div className="feature-card-icon">
                                 {typeof item.icon === 'string' ? (
                                    <span className="emoji-icon">{item.icon}</span>
                                 ) : (
                                    <Image src={item.icon} alt="img" />
                                 )}
                              </div>
                              <div className="feature-card-details">
                                 <h4 className="feature-card-title">{item.title}</h4>
                                 <p className="feature-card-text">{item.desc}</p>
                              </div>
                           </div>
                        </ScrollAnimation>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChooseArea
