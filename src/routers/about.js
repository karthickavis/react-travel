import Navbar from "../components/navbar";

import Footer from "../components/footer";
import AboutUs from "../components/aboutus";


function About (){
    return(
        <>
          <Navbar/>
          
        {/* <Hero
        // cName="hero-mid"
        // heroimg={AboutImg}
        // title="About us"
        
        btnClass="hide"

        /> */}
        
        
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default About;