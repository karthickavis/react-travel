import "./destinationstyle.css";
import Paris1 from "../assets/paris1.jpeg";
import Paris2 from "../assets/paris2.jpeg";
import New1 from "../assets/newyork1.jpeg";
import New2 from "../assets/newyork2.jpeg";
import DestinationData from "./destinationdata";

const Destination = () => {
    return(
    <div className="destination">

    <h1>Popular Destination</h1>
    <p>Tour give you the opportunity to see a lot, within a time frame .</p>

    <DestinationData
    className="first-des"
    heading="Paris"
    text="For centuries Paris has been one of the world’s most important and attractive cities. It is appreciated for the opportunities it offers for business and commerce, for study, for culture, and for entertainment; its gastronomy, haute couture, painting, literature, and intellectual community especially enjoy an enviable reputation. Its sobriquet “the City of Light” (“la Ville Lumière”), earned during the Enlightenment, remains appropriate, for Paris has retained its importance as a centre for education and intellectual pursuits."
    img1={Paris1}
    img2={Paris2}
    />

<DestinationData
     className="first-des-reverse"
    heading="NewYork"
    text="New York is the most ethnically diverse, religiously varied, commercially driven, famously congested, and, in the eyes of many, the most attractive urban centre in the country. No other city has contributed more images to the collective consciousness of Americans: Wall Street means finance, Broadway is synonymous with theatre, Fifth Avenue is automatically paired with shopping, Madison Avenue means the advertising industry, Greenwich Village connotes bohemian lifestyles, Seventh Avenue signifies fashion, Tammany Hall defines machine politics, and Harlem evokes images of the Jazz Age, African American aspirations, and slums."
    img1={New1}
    img2={New2}
    />
    
    </div>
    )
}
export default Destination; 