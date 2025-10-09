"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import logo from "@/assets/img/logo/logo.png"

const FooterOne = () => {
   const [email, setEmail] = useState("")
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [showSuccess, setShowSuccess] = useState(false)
   const [error, setError] = useState("")

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      
      if (!email) {
         setError("Please enter your email address")
         return
      }

      if (!email.includes("@")) {
         setError("Please enter a valid email address")
         return
      }

      setIsSubmitting(true)
      setError("")

      try {
         // Simulate API call - replace with actual API endpoint
         await new Promise(resolve => setTimeout(resolve, 1000))
         
         // Here you would typically call your API endpoint
         // const response = await fetch('/api/newsletter', {
         //    method: 'POST',
         //    headers: { 'Content-Type': 'application/json' },
         //    body: JSON.stringify({ email })
         // })
         
         setShowSuccess(true)
         setEmail("")
         
         // Hide success message after 5 seconds
         setTimeout(() => {
            setShowSuccess(false)
         }, 5000)
         
      } catch (err) {
         setError("Something went wrong. Please try again.")
      } finally {
         setIsSubmitting(false)
      }
   }
   return (
      <footer className="footer-wrapper footer-layout2 pb-50">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-auto col-lg-6 order-xl-1">
                  <div className="widget footer-widget">
                     <div className="widget-about">
                        <div className="footer-logo">
                           <Link href="/"><Image src={logo} style={{ height: "40px", width: "auto", objectFit: "contain" }} alt="BioTap" /></Link>
                        </div>
                        <p className="about-text">BioTap is a cutting-edge biometric payment technology company at the forefront of innovation in secure digital banking. Established in 2024, we&apos;re revolutionizing how people interact with financial services through advanced biometric authentication.</p>
                        <div className="social-btn style2">
                           {/* <Link href="https://facebook.com/"><i className="fab fa-facebook-f"></i></Link> */}
                           <Link href="https://x.com/Biotapservices">
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
                     <p className="newsletter-text">Sign up with your email address to receive news and updates about BioTap&apos;s latest developments</p>
                     
                     {showSuccess && (
                        <div className="alert alert-success mb-3" style={{ 
                           backgroundColor: '#d4edda', 
                           color: '#155724', 
                           padding: '10px 15px', 
                           borderRadius: '5px',
                           border: '1px solid #c3e6cb',
                           fontSize: '14px'
                        }}>
                           ✅ Thank you! You&apos;ve successfully subscribed to our newsletter.
                        </div>
                     )}
                     
                     {error && (
                        <div className="alert alert-danger mb-3" style={{ 
                           backgroundColor: '#f8d7da', 
                           color: '#721c24', 
                           padding: '10px 15px', 
                           borderRadius: '5px',
                           border: '1px solid #f5c6cb',
                           fontSize: '14px'
                        }}>
                           ❌ {error}
                        </div>
                     )}
                     
                     <form onSubmit={handleSubmit} className="newsletter-form">
                        <div className="form-group">
                           <input 
                              className="form-control" 
                              type="email" 
                              placeholder="Your Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={isSubmitting}
                              required
                           />
                        </div>
                        <button 
                           type="submit" 
                           className="btn btn5" 
                           disabled={isSubmitting}
                           style={{ 
                              opacity: isSubmitting ? 0.7 : 1,
                              cursor: isSubmitting ? 'not-allowed' : 'pointer'
                           }}
                        >
                           {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                     </form>
                  </div>
               </div>
               <div className="col-xl-auto col-lg-6 order-xl-2">
                  <div className="footer-widget widget-contact">
                     <h3 className="fw-title">CONTACT US</h3>
                     <p className="contact-info-text">Lagos, Nigeria</p>
                     <div className="contact-info-link">Call Us: <Link href="tel:+2347033219893">+234 703 321 9893</Link></div>
                     <div className="contact-info-link"><Link href="mailto:contact@bio-tap.com">contact@bio-tap.com</Link></div>
                     <p className="copyright-text">Copyright © 2025 <Link href="#">BioTap.</Link> All rights reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
