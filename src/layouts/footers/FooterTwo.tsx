"use client"
import Image from "next/image"
import Link from "next/link"

import logo_1 from "@/assets/img/logo/logo.png"

const FooterTwo = () => {
   return (
      <footer className="footer-wrapper footer-layout2 pb-50">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-auto col-lg-6 order-xl-1">
                  <div className="widget footer-widget">
                     <div className="widget-about">
                        <div className="footer-logo">
                           <Link href="/"><Image src={logo_1} style={{ height: "35px" }} alt="biotap" /></Link>
                        </div>
                        <p className="about-text">BioTap is a cutting-edge biometric payment technology company at the forefront of innovation in secure digital banking. Established in 2024</p>
                        <div className="social-btn style2">
                           <Link href="https://twitter.com/Biotapservices">
                              <i className="fab fa-twitter"></i>
                           </Link>
                           <Link href="https://www.instagram.com/Biotap_services"><i className="fab fa-instagram"></i></Link>
                           <Link href="https://www.linkedin.com/in/Biotapservices"><i className="fab fa-linkedin"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-xl-auto col-lg-6 order-xl-3">
                  <div className="footer-widget widget-newsletter">
                     <h3 className="fw-title">SIGN UP FOR EMAIL UPDATES</h3>
                     <p className="newsletter-text">Sign up with your email address to receive news and updates</p>
                     <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                        <div className="form-group">
                           <input className="form-control" type="email" placeholder="Your Email Address" />
                        </div>
                        <button type="submit" className="btn btn5">Subscribe</button>
                     </form>
                  </div>
               </div>
               <div className="col-xl-auto col-lg-6 order-xl-2">
                  <div className="footer-widget widget-contact">
                     <h3 className="fw-title">CONTACT US</h3>
                     <p className="contact-info-text">Lagos, Nigeria</p>
                     <div className="contact-info-link">Call Us: <Link href="tel:+2347033219893">+234 703 321 9893</Link></div>
                     <div className="contact-info-link"><Link href="mailto:contact@bio-tap.com">contact@bio-tap.com</Link></div>
                     <p className="copyright-text">Copyright © 2025 <Link href="#">Biotap.</Link> All rights reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
