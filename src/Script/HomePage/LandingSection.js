import React, {useState, useEffect} from "react";
import styles from '../../Styling/HomePage/LandingSection.css';
import RotatingQuote from "./RotatingQuote";
import Aos from "aos";
import 'aos/dist/aos.css';

function LandingSection(){
    
    const quotes = [
        ['Rosa Parks', '"To bring about change, you must not be afraid to take the first step. We will fail when we fail to try."'],
        ['Neil deGrasse Tyson', '"Part of our formal education should be training in empathy. Imagine how different the world would be if, in fact, it were ‘reading, writing, arithmetic, empathy."'],
        ['W.E.B. Du Bois', '"How curious a land is this, how full of untold story, of tragedy and laughter, and the rich legacy of human life; shadowed with a tragic past, and big with future promise."'],
        ['Ta-Nehisi Coates', '"Racism is not merely a simplistic hatred. It is, more often, broad sympathy toward some and broader skepticism others."']
    ];

    const [quote, setQuote] = useState(['','']);
    let time = 5000;
    let start = true;
    React.useEffect(() => {
        console.log(`initializing interval`);
        if(start == true){
            updateQuote();
            start = false;
        }{
            const interval = setInterval(() => {
                console.log(time);
                updateQuote();
            }, time);

            return () => {
                console.log(`clearing interval`);
                clearInterval(interval);
            };
        }
    }, []);

    const updateQuote = () => {
        var singleQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote (singleQuote );
    };

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(!animate);

    return (
        <div className= 'outerBody'>
            <div className = 'smallTextArea' data-aos="fade-right" data-aos-duration="900" data-aos-delay="300">   
                <h1>Welcome Message</h1>
                <p>Welcome to the Antiracism Search Pad! This resource is designed to simplify and speed up your search for antiracism resources. A google search of antiracism resources generates over 22 million results. </p>
                <p>
                    The goal here is to reduce the need to open up multiple tabs on your browser whil you try to track down the antiracism resources most aligned with your needs, whether that be lesson plans for your classroom, conversation starters with your child, training for your colleagues, or a self-paced guide to facilitate your own antiracist journey! 
                </p>
                <p>
                    This site provides a curated selection of resources and materials on topics related to advancing racial equity. It will function as a “living” resource, changing, adapting and evolving based on the release of new resources and responsive to ongoing feedback and community input.
                </p>
            </div>

            <div className = 'rightImgContainer'>
                <div className = 'img-Big img1'></div>
                <div className = 'img-Big img2'></div>
                <div className = 'img-Big img3'>
                    <RotatingQuote data-aos="zoom-in"onChange={handleClick}
                
                name = {quote[0]} message = {quote[1]} />
                </div>
            </div>
            {/* <div class="custom-shape-divider-bottom-1636131500">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}
<div class="custom-shape-divider-bottom-1636132055">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
            
        </div>
    );
}

export default LandingSection;