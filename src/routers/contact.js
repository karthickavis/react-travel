

import Navbar from "../components/navbar";
 import Hero from "../components/hero";
 import AboutImg from "../assets/pexels-photo-2422588.jpeg";
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