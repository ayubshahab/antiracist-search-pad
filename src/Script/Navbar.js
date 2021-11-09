import React from "react";
import '../Styling/Navbar.css';
import AOS from 'aos'
import { HashLink } from 'react-router-hash-link';

function Navbar() {  
    AOS.init();
    return(
        <div className = 'navbar' >
            <h1 className = 'logo' data-aos="" data-aos-duration="800" href=""><a href="/">Antiracist Search Pad</a></h1>
            <div className = 'navLinks'  >
                <ul >
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="700"> 
                        <a href="">Login</a>
                    </li>
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="600"> 
                        <a href="">Contact US</a>
                    </li>
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="500"> 
                        <a href="">About US</a>
                    </li>
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="400"> 
                        <a href="">Fast Facts and Figures</a>
                    </li>
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="300"> 
                        <a href="">About the Search Pad</a>
                    </li >
                    <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="200"> 
                        <a href="/resource-page">Resource Page</a>
                    </li >
                </ul>
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    );
}
export default Navbar;