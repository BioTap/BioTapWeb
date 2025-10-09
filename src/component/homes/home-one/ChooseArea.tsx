"use client";
import Image, { StaticImageData } from "next/image";
import ScrollAnimation from "@/ui/ScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

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
   titleKey: string;
   price?: string;
   descKey: string;
}[];

const biotap_features: DataType2[] = [
   {
      id: 1,
      icon: "fas fa-user-check",
      titleKey: "features.biometric.title",
      descKey: "features.biometric.desc",
   },
   {
      id: 2,
      icon: "fas fa-shield-alt",
      titleKey: "features.ai.title",
      descKey: "features.ai.desc",
   },
   {
      id: 3,
      icon: icon_3,
      titleKey: "features.global.title",
      descKey: "features.global.desc",
   },
]

const ChooseArea = () => {
   const { t } = useLanguage();
   
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
                           <h2 className="title style2 gradient-text hero-title-enhanced">💎 {t('features.title')}</h2>
                           
                           <div className="enhanced-text-block">
                              <div className="main-statement">
                                 <p className="sec-text enhanced-main-text" dangerouslySetInnerHTML={{ __html: t('features.main_description') }} style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#ffffff', marginBottom: '1rem' }}>
                                 </p>
                              </div>
                              
                              <div className="elaboration-text">
                                 <p className="sec-text" dangerouslySetInnerHTML={{ __html: t('features.elaboration') }} style={{ marginBottom: '2rem' }}>
                                 </p>
                              </div>
                              
                              <div className="slogan-container">
                                 <div className="slogan-text">
                                    <span className="slogan-word">{t('slogan.bankless')}</span>
                                    <span className="slogan-word">{t('slogan.tapmore')}</span>
                                    <span className="slogan-word">{t('slogan.pay')}</span>
                                 </div>
                                 <div className="slogan-underline"></div>
                              </div>
                              
                              <div className="feature-callout">
                                 <div className="gear-icon-container">
                                    <span className="gear-icon">⚙️</span>
                                 </div>
                                 <p className="feature-callout-text">
                                    <strong>{t('features.callout')}</strong>
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
                                 {typeof item.icon === 'string' && item.icon.startsWith('fas ') ? (
                                    <i className={item.icon}></i>
                                 ) : typeof item.icon === 'string' ? (
                                    <span className="emoji-icon">{item.icon}</span>
                                 ) : (
                                    <Image src={item.icon} alt="img" />
                                 )}
                              </div>
                              <div className="feature-card-details">
                                 <h4 className="feature-card-title">{t(item.titleKey)}</h4>
                                 <p className="feature-card-text">{t(item.descKey)}</p>
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
