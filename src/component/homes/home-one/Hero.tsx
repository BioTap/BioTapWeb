"use client";
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

import hero_thumb from "@/assets/img/banner/banner_shape05.png"
import CountdownClock from "@/ui/CountDownClock"
import TypewriterText from "@/ui/TypewriterText"
import BetaSignupCard from "@/ui/BetaSignupCard"

const Hero = () => {
   const { t } = useLanguage();
   
   const heroTexts = [
      t('hero.text1'),
      t('hero.text2'),
      t('hero.text3')
   ]

   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <TypewriterText 
                        texts={heroTexts}
                        typingSpeed={50}
                        deletingSpeed={30}
                        pauseTime={2000}
                     />
                     <div className="btn-wrap">
                        <Link href="/contact" className="btn btn-modern" >
                           {t('hero.cta')}
                        </Link>
                        <Link href="/blog" className="btn btn-bio" >
                           {t('hero.learn_more')}
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
            <BetaSignupCard />
         </div>
      </div>
   )
}

export default Hero
