 import Navbar from "../components/navbar";
 import Hero from "../components/hero";
import Destination from "../components/destination";
// import Trip from "../components/trip";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Support from "../components/support";


        
function Home (){
    return(
        <>
         <Navbar/>
         
        <Hero/>

<Support/>
 
       
      
        <Destination/>
        <Slider/>
        
        <Footer/>
        </>
    )
}
export default Home;