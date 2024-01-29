 import Navbar from "../components/navbar";
 import Hero from "../components/hero";
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";
import webimg from "../assets/imgggg.jpg"
function Home (){
    return(
        <>
         <Navbar/>
         
        <Hero
        cName="hero"
        // heroimg="https://iso.500px.com/wp-content/uploads/2015/08/travel_cover-1500x1000.jpeg"
        heroimg="https://free4kwallpapers.com/uploads/originals/2020/08/03/the-traveler-%7C-a-simple-flat-designed-wallpaper.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"

        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}
export default Home;