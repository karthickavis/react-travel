

import Navbar from "../components/navbar";

import Footer from "../components/footer";
import ContactForm from "../components/contactform";
 function Contact (){
    return(
        <>
                  <Navbar/>
        {/* <Hero
        // cName="hero-mid"
        // heroimg={AboutImg}
        // title="Contact us"
        
        btnClass="hide"

        /> */}
        <ContactForm/>
         <Footer/>
        </>
    )
}
export default Contact;