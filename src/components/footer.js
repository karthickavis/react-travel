import "./footerstyle.css";
 function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                <h1>Travel</h1>
               <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
              
            </div>
            <div className="bottom">
        
        <div>
            <h3>Project</h3>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">Licence</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h3>Community</h3>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h3>Help</h3>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
            
        </div>

        <div>
            <h3>Others</h3>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Licence</a>
            
        </div>
            </div>
        </div>
    )
 }
 export default Footer;