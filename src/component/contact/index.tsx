import FooterThree from "@/layouts/footers/FooterThree"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Contact = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Contact" />
         <ContactArea />
         <FooterThree />
      </main>
   )
}

export default Contact
