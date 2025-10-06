'use client'
import React, { useActionState } from 'react'
import { handleContactFormAction } from '@/app/actions/sendContactEmail'

export default function ContactForm() {
   const [state, formAction] = useActionState(handleContactFormAction, { success: false })

   return (
      <form action={formAction}>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="user_name" placeholder="Enter your name" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" name="user_email" placeholder="Enter your email" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="user_phone" placeholder="Mobile no" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="user_company" placeholder="Company" required />
               </div>
            </div>
         </div>
         <div className="form-grp">
            <textarea name="message" placeholder="Enter your message..." required></textarea>
         </div>
         <button type="submit" className="btn">Send Message</button>

         {state.success && <p className="text-success mt-2">✅ Message sent successfully!</p>}
         {state.error && <p className="text-danger mt-2">❌ Error: {state.error}</p>}
      </form>
   )
}
