"use client"
import { useState } from 'react'

const NewsletterForm = () => {
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
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               type="email" 
               placeholder="Enter your email address" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               disabled={isSubmitting}
               required
            />
            <button type="submit" disabled={isSubmitting}>
               <i className="fas fa-paper-plane"></i>
            </button>
         </form>
         
         {showSuccess && (
            <div className="newsletter-success" style={{ 
               color: '#4ecdc4', 
               fontSize: '14px', 
               marginTop: '10px',
               textAlign: 'center'
            }}>
               ✅ Thank you! You&apos;ve successfully subscribed to our newsletter.
            </div>
         )}
         
         {error && (
            <div className="newsletter-error" style={{ 
               color: '#ff6b6b', 
               fontSize: '14px', 
               marginTop: '10px',
               textAlign: 'center'
            }}>
               ❌ {error}
            </div>
         )}
      </div>
   )
}

export default NewsletterForm
