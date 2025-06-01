import "./aboutustyle.css";

import Online from "../assets/online-service - Copy.jpg";
import Travel from "../assets/travel.jpeg";
import C1 from "../assets/cutomer1.jpg";
import C2 from "../assets/customer2.png";
import C3 from "../assets/customer3.webp";


function AboutUs () {
return(
   
   <div className="aboutus">
      
    <div className="content">



   <p className="first-p">Welcome to <span> Tripeasy </span>, your trusted companion for unforgettable journeys around the globe. Our mission is simple: to inspire and guide travelers in exploring the world’s most beautiful destinations, creating memories that last a lifetime.</p>

</div>

<div className="main-content">

  <div className="first-content">
   <div className="image">
      <img src={Online} alt="hii"></img>
   </div>
   <div className="first-contentsss">
   <div>
         <h2>Who We Are</h2>
         <p>Founded in <span>2010 </span>, we are a passionate team of travel enthusiasts dedicated to curating exceptional travel experiences. From pristine beaches and bustling cities to serene mountains and cultural heritage sites, we bring you closer to the destinations you’ve always dreamed of.</p>
      </div>
      <div>
         <h2>What We Offer</h2>
         <p><span>Tailored Experiences : </span> Customizable itineraries to suit every traveler’s unique preferences.</p>
         <p><span>Expert Guidance : </span> Destination experts and travel advisors available to help you plan your trip seamlessly.</p>
         <p><span>Affordable Luxury : </span> Unmatched quality at competitive prices to ensure every traveler can explore in style.</p>
         <p><span>24/7 Support : </span> Comprehensive customer support to assist you at every step of your journey.</p>
      </div>

   </div>
  
  </div>
  <div className="second-content">
  
   <div className="second-contentsss">
   <h2>Our Achievements</h2>
      <p>We are proud to have made a mark in the travel industry with our commitment to excellence:

</p>
<p><span>Happy Travelers : </span>  Trusted by thousands of satisfied customers worldwide.</p>
<p> <span>Award-Winning Service : </span>Recognized as the Best Travel Agency of the Year.</p>
<p><span>Global Partnerships : </span> Collaborations with leading airlines, hotels, and tour operators to ensure premium services.</p>
<p> <span>Eco-Friendly Initiatives : </span> Advocates for sustainable tourism, helping preserve the beauty of the destinations we cherish.</p>
{/* <img src={job} alt="job"/> */}
      </div>
   
      <div className="image">
      <img src={Travel} alt="travel"></img>
   </div>
   </div>
  </div>
   

    <div className="customer-reviews">
      <h1>Customer Reviews</h1>
      <div className="customer">

      <div className="customer-card">
         <img src={C1} alt="c1"></img>
         <div className="customer-rating">
            <h3>"An unforgettable experience!"</h3>
            <p>I had an amazing time booking my trip through this website! Everything was seamless — from choosing my destination to finalizing the itinerary. Highly recommend it!</p>
            <span></span>
         </div>
      </div>
      <div className="customer-card">
         <img src={C2} alt="c2"></img>
         <div className="customer-rating">
            <h3>"Hassle-free and budget-friendly!"</h3>
            <p>I found the perfect vacation package within my budget. The site was easy to navigate, and customer support was super helpful. Will definitely book again!</p>
            <span></span>
         </div>
      </div>
      <div className="customer-card">
         <img src={C3} alt="c3"></img>
         <div className="customer-rating">
            <h3>"Perfect for solo travelers!"</h3>
            <p>As a solo traveler, I loved how this site provided safe, affordable options. It gave me the confidence to explore new places worry-free!</p>
            <span></span>
         </div>
      </div>

      </div>
    </div>
  
  
   </div>
 
)
}
export default AboutUs;
