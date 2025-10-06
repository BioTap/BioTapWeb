"use client"

const BlogForm = () => {

   return (
      <div className="comment-respond">
         <h3 className="comment-reply-title">Leave a Reply</h3>
         <form onSubmit={(e) => e.preventDefault()} className="comment-form">
            <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
            <div className="row">
               <div className="col-md-6">
                  <div className="form-grp">
                     <label htmlFor="name">Name</label>
                     <input type="text" id="name" />
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="form-grp">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" />
                  </div>
               </div>
            </div>
            <div className="form-grp">
               <label htmlFor="website">Website</label>
               <input type="url" id="website" />
            </div>
            <div className="form-grp">
               <label htmlFor="message">Message</label>
               <textarea id="message" placeholder="Simultaneously we had a problem"></textarea>
            </div>
            <div className="form-grp checkbox-grp">
               <input type="checkbox" className="form-check-input" id="checkbox" />
               <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button type="submit" className="btn">Submit Now</button>
         </form>
      </div>
   )
}

export default BlogForm
