import Image from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/img/logo/logo.png";

const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className={`extra-info ${offCanvas ? "active" : ""}`}>
               <div className="close-icon menu-close">
                  <button onClick={() => setOffCanvas(false)}><i className="far fa-window-close"></i></button>
               </div>
               <div className="logo-side mb-30">
                  <Link href="/"><Image src={logo_1} alt="Logo" /></Link>
               </div>
               <div className="side-info mb-30">
                  <div className="contact-list mb-30">
                     <h4>Office Address</h4>
                     <p>Lagos, Nigeria</p>
                  </div>
                  <div className="contact-list mb-30">
                     <h4>Phone Number</h4>
                     <p><Link href="tel:+2347033219893">+234 703 321 9893</Link></p>
                  </div>
                  <div className="contact-list mb-30">
                     <h4>Email Address</h4>
                     <p><Link href="mailto:contact@bio-tap.com">contact@bio-tap.com</Link></p>
                  </div>
               </div>
               <div className="social-icon-right mt-30">
                  <Link href="https://twitter.com/Biotapservices"><i className="fab fa-twitter"></i></Link>
                  <Link href="https://www.instagram.com/Biotap_services"><i className="fab fa-instagram"></i></Link>
                  <Link href="https://www.linkedin.com/in/Biotapservices"><i className="fab fa-linkedin-in"></i></Link>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className={`offcanvas-overly ${offCanvas ? "active" : ""}`}></div>
         </div>
      </>
   )
}

export default HeaderOffcanvas
