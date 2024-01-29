import Navbar from "../components/navbar";
 import Hero from "../components/hero";
 import AboutImg from "../assets/pexels-photo-2422588.jpeg";
import Footer from "../components/footer";
import LogIn from "../components/login";
 function LoginForm (){
    return(
        <>
                  <Navbar/>
        {/* <Hero
        // cName="hero-mid"
        // heroimg={AboutImg}
        // title="Contact us"
        
        btnClass="hide"

        /> */}
        <LogIn/>
         {/* <Footer/> */}
        </>
    )
}
export default LoginForm;