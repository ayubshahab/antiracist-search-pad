import React from "react";
import '../../Styling/HomePage/AboutSearchPad.css';
import Aos from "aos";
import 'aos/dist/aos.css';

function AboutSearchPad(){
    React.useEffect(() =>{
        Aos.init({duration: 2000});
    },[]);

    
    return(
        <div className = 'outerContainer'>
            <div className = 'subHeading'>
                <h1 data-aos = 'zoom-in'>About the Search Pad</h1>
            </div>
            <div className = 'wrapper'>
                <div className = 'leftContainer' data-aos="fade-right">
                    <h2 data-aos="fade-down" data-aos-delay="500"
                     >So many resources, so little time… </h2>
                    <p data-aos="fade-down" data-aos-delay="600">In response to America's 2020 Racial Reckoning, the availability and  breadth of resources on antiracism has steadily increased, including recommended book lists, classroom lesson plans, popular TedTalks, online webinars, podcast playlists, documentaries, tv series, etc. As individuals and organizations set out to increase awareness, build capacity and take action to advance racial justice and equity, the sheer number of available resources can cause cognitive overload and choice paralysis. Additionally, sifting through multiple websites and skimming materials can be time-consuming and distracting when on the hunt for a specific type of resource. </p>
                    <p data-aos="fade-down"  data-aos-delay="700">This resource hub is designed to simplify the decision-making process when handpicking resources to meet your needs. Drawing from a curated selection of materials freely available online, you can Build Your Own Compilation using an advanced filtering system to narrow down resources by target audience, resource type, and/or duration or browse the Ready-Made Resource Compilations to explore pre-selected resources related to key antiracist and social justice topics. </p>
                    <h4 data-aos="fade-down" data-aos-delay="800">Note: This is a “living information hub,” and resources will change, adapt and evolve based on feedback and community input.</h4>
                    <div className = 'externalLinks'>
                        <div><a href="">Browse Resource Compilation</a></div>
                        <div><a href="">Build your own resource compilation</a></div>
                    </div>
                </div>
                <div className = 'rightContainer' data-aos='fade-left'>
                    <p data-aos="fade-up-left" data-aos-duration="80" data-aos-delay="500">Today, more mediated information is available to more people than at any other time in human history. </p>
                    <p data-aos="fade-up-left" data-aos-duration="80" data-aos-delay="1000">We have experienced a shift from the challenge of struggling to find information to navigating infoglut (Edmunds & Morris, 2000), an excessive or overwhelming amount of information.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutSearchPad;