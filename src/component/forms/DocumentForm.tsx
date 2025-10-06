"use client"
const DocumentForm = () => {

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" placeholder="Your Name" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" placeholder="Your Email" />
               </div>
            </div>
         </div>
         <div className="form-grp">
            <textarea placeholder="Enter you message....."></textarea>
         </div>
         <button type="submit" className="btn">Send Message</button>
      </form>
   )
}

export default DocumentForm
