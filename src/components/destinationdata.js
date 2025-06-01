import "./destinationstyle.css";

import { Component } from "react";


class DestinationData extends Component{
   render(){
    return(
        <div className={this.props.className}>
        <div className="first-text">
           <h2>{this.props.heading}</h2>
           <p>{this.props.text}</p>
        </div>
        <div className="first-img">
   
      <img alt="img" src={this.props.img1} />
      
      
      <img alt="img" src={this.props.img2}/>

        </div>
   </div>
    )
   }
}
export default DestinationData;