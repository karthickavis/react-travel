import "./contactformstyle.css";
import contactimage from "../assets/customer-contact.jpg"


function ContactForm () {
return(
    
    <div className="contact">
    
    <h1>Send a message to us!</h1>
    <div className="container-box">
    <div className="form">
        <form>
            {/* <div>
                <input type="text" placeholder="Enter the name"/>
            </div>
            <div>
                <input type="mail" placeholder="Enter the email"/>
            </div>
            <div>
                <textarea row="50">Enter the message</textarea>
            </div>
            <div>
                <button>Send</button>
            </div> */}
            <input type="text" placeholder="enter the name"/>
            <input type="mail" placeholder="enter the email"/>
            <textarea rows="10" cols="40" maxLength="300" placeholder="enter the mesage here !"/>
            <button className="btn-contact">Send</button>
            </form>
        
   </div>
    <div className="img-box">
        <img src={contactimage} alt="hii"/>
        </div>
    </div>
    </div>
)
   

}
export default ContactForm;