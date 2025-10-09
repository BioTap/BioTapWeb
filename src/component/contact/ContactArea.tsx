import Link from "next/link";

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fas fa-map-marker-alt",
      title: "Location",
      info: (<>Lagos, Nigeria</>),
   },
   {
      id: 2,
      icon: "fas fa-phone-alt",
      title: "Contact",
      info: (<><Link href="tel:+2347033219893">+234 703 321 9893</Link></>),
   },
   {
      id: 3,
      icon: "fas fa-envelope",
      title: "Email",
      info: (<><Link href="mailto:contact@bio-tap.com">contact@bio-tap.com</Link></>),
   },
   {
      id: 4,
      icon: "fas fa-business-time",
      title: "Visit Between",
      info: (<>Mon - Sat : 8.00-5.00 <br /> </>),
   },
]

const ContactArea = () => {
   return (
      <section className="contact-area pt-140 pb-140">
         <div className="container">
            <div className="contact-info-wrap">
               <div className="row justify-content-center">
                  {contact_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="contact-info-item">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h6 className="title">{item.title}</h6>
                              <p>{item.info}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="contact-map-wrap">
               <div className="row justify-content-center">
                  <div className="col-lg-10">
                     <div className="contact-map">
                        <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890" 
                           allowFullScreen 
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           style={{ width: '100%', height: '400px', border: 'none', borderRadius: '10px' }}
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
