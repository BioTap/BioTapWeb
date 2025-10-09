"use client"
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/component/forms/NewsletterForm";

import footerShape_1 from "@/assets/img/images/footer_shape01.png";
import footerShape_2 from "@/assets/img/images/footer_shape02.png";
import bg_img from "@/assets/img/bg/footer_bg.png"

const FooterThree = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="footer-top">
                  <div className="row justify-content-center">
                     <div className="col-xl-6 col-lg-8 col-sm-10">
                        <div className="footer-widget text-center">
                           <h4 className="fw-title">Subscribe Newsletter</h4>
                           <div className="footer-newsletter">
                              <p>Stay updated with BioTap&apos;s latest developments and innovations in biometric payment technology.</p>
                              <NewsletterForm />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text text-center">
                           <p>Copyright © 2025 BioTap. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <Image src={footerShape_1} alt="" className="alltuchtopdown" />
               <Image src={footerShape_2} alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default FooterThree;
