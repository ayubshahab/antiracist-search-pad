import React from "react";
import '../../Styling/HomePage/RotatingQuote.css'
import Aos from "aos";
import 'aos/dist/aos.css';

function RotatingQuote({name, message, animation}){
    return(
        <div className = ' quoteContainer'>
            <p  >{message} </p>
            <h3 >{name}</h3>
        </div>
    );
}
 
export default RotatingQuote;