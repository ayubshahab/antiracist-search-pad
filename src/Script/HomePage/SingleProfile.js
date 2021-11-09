import React from "react";
import '../../Styling/HomePage/SingleProfile.css'
import Aos from "aos";
import 'aos/dist/aos.css';
function SingleProfile({ name, position, message, number }) {
    //vanishIn
    //data-aos="fade-left"
    return (//<link rel="stylesheet" href="yourpath/magic.css">
        <div className="profileContainer"  >
            <div className="innerProfileContainer" >
                <div className="cardFront">
                    <div className='profilePicture' >
                       
                    </div>
                    <div className='profileDetails'>
                        <h1>{name}</h1>
                        <h3>{position}</h3>
                    </div>
                </div>
                <div className="cardBack">
                    <p>{message}</p>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SingleProfile;