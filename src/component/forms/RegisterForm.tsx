"use client"
import CloseEye from "@/svg/CloseEye";
import Link from "next/link";

const RegisterForm = () => {

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="eg-login__input-wrapper">
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Nathaniel Lewis" />
               </div>
            </div>
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="email">Your Email</label>
                  <input id="email" type="email" placeholder="biotap@mail.com" />
               </div>
            </div>
            <div className="eg-login__input-box">
               <div className="eg-login__input">
                  <label htmlFor="eg-password__input">Password</label>
                  <div className="eg-password-show">
                     <input id="eg-password__input" type="password" placeholder="Min. 6 characters" />
                     <div className="eg-login__input-eye" id="eg-password__show-toggle" >
                        <span id="eg-password__show" className="eye-open"><CloseEye /></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="eg-login__suggetions d-flex align-items-center justify-content-between mb-20">
            <div className="eg-login__remeber">
               <input id="remeber" type="checkbox" />
               <label htmlFor="remeber">Remember me</label>
            </div>
            <div className="eg-login__forgot">
               <Link href="/forgot">Forgot Password?</Link>
            </div>
         </div>
         <div className="eg-login__bottom">
            <button type="submit" className="btn w-100">Register</button>
         </div>
      </form>
   )
}

export default RegisterForm;
