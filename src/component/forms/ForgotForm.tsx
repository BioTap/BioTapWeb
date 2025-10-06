"use client"
import Link from "next/link"

const ForgotForm = () => {

   return (
      <section className="eg-login__area pb-140 p-relative z-index-1 fix pt-140">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="eg-login__wrapper">
                     <div className="eg-login__top text-center mb-30">
                        <h3 className="eg-login__title">Forgot Password</h3>
                        <p>Enter your email address to request password reset.</p>
                     </div>
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="eg-login__option">
                           <div className="eg-login__input-wrapper">
                              <div className="eg-login__input-box">
                                 <div className="eg-login__input">
                                    <label htmlFor="email">Your Email</label>
                                    <input id="email" type="email" placeholder="xeco@mail.com" />
                                 </div>
                              </div>
                           </div>
                           <div className="eg-login__bottom mt-30">
                              <button type="submit" className="btn w-100">Send Mail</button>
                           </div>
                           <p>Remeber Passowrd? <Link href="/login">Login</Link></p>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ForgotForm
