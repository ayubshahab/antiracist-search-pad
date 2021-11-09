import React from "react";
import Navbar from '../Navbar';
import LandingSection from './LandingSection';
import AboutSearchPad from './AboutSearchPad';
import InfographicArea from './InfographicArea';
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
import { HashLink as Link } from 'react-router-hash-link';

function HomePage(){
    return(
        <div className = 'homepage'>
            <Navbar />
            <LandingSection />
            <AboutSearchPad />
            <InfographicArea />
            <AboutUS />
            <ContactUS />
        </div>
        
    );
}

export default HomePage;