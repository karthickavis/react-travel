import Navbar from "../components/navbar";
 import Hero from "../components/hero";
 import AboutImg from "../assets/pexels-photo-2422588.jpeg";
 import Trip from "../components/trip"
import Footer from "../components/footer";
function Service (){
    return(
        <>
                  <Navbar/>
        {/* <Hero
        // cName="hero-mid"
        // heroimg={AboutImg}
        // title="Service"
        
        btnClass="hide"

        /> */}
         <Trip/>
         <Footer/>
        </>
    )
}
export default Service;