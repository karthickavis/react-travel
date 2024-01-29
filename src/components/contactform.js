import "./contactformstyle.css";

function ContactForm () {
return(
    <div className="contact-form">
    <h1>Send a message to us!</h1>

    <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        
        <textarea placeholder="message" rows="4"></textarea>
        <button>Send Message</button>

    </form>

    </div>
)
   

}
export default ContactForm;