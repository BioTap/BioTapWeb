"use client"
const NewsletterForm = () => {

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <input type="email" placeholder="Info@gmail.com" />
         <button type="submit"><i className="fas fa-paper-plane"></i></button>
      </form>
   )
}

export default NewsletterForm
