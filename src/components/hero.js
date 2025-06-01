import "./herostyle.css";
import malimg from '../assets/maldives-ile-beach-sun-38238.jpeg';

function Hero (){
    return(
        <>
        {/* <div className={props.cName}>
            <img alt="hero" src={props.heroimg}/>

        </div>
        <div className="hero-text">
        
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <div> <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a></div>
            

        </div> */}
        <div className="hero-content">
            <div className="h-c">
                <h1>Your Story Your Journey</h1>
                <p>Choose Your favourite Destination !</p>
                <button>Explore Us</button>
            </div>

        </div>
        </>
    )
}
 export default Hero;