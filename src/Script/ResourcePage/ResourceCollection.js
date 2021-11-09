import React from "react";
import '../../Styling/ResourcePage/ResourceCollection.css';
import ToggleSwitch from "./ToggleSwitch";
import SingleResource from "./SingleResource";
function ResourceCollection() {
    return (
        <div className='main-resource-container'>
            <div className='resource-inner-wrapper'>
                <div className='left-selection-container' data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                    <div className='topic-filter' >
                        <h2>Filter By Topic</h2>
                        <span><ToggleSwitch /> Education</span>
                        <span><ToggleSwitch /> Healthcare</span>
                        <span><ToggleSwitch /> Criminal Justice</span>
                        <span><ToggleSwitch /> Politics & Voter Suppression</span>
                        <span><ToggleSwitch /> Allyship</span>
                    </div>
                    <div className='audience-filter' >
                        <h2>Filter By Audience</h2>
                        <span><ToggleSwitch /> Preschool</span>
                        <span><ToggleSwitch /> Early Elementary</span>
                        <span><ToggleSwitch /> Middle School</span>
                        <span><ToggleSwitch /> Educators</span>
                        <span><ToggleSwitch /> School Leaders</span>
                        <span><ToggleSwitch /> Workplace Colleagues</span>
                        <span><ToggleSwitch /> School Leaders</span>
                        <span><ToggleSwitch /> Workplace Colleagues</span>
                        <span><ToggleSwitch /> Researchers</span>
                    </div>
                    <div className='resource-type-filter' >
                        <h2>Filter By Resource Type</h2>
                        <span><ToggleSwitch /> Assessment Tools</span>
                        <span><ToggleSwitch /> Issue Briefs</span>
                        <span><ToggleSwitch /> Infographics</span>
                        <span><ToggleSwitch /> Lesson Plans/Activities</span>
                        <span><ToggleSwitch /> Organizations to Follow</span>
                        <span><ToggleSwitch /> Podcasts</span>
                        <span><ToggleSwitch /> Research Studies</span>
                        <span><ToggleSwitch /> Resource Compilations</span>
                        <span><ToggleSwitch /> Webinars</span>
                    </div>
                    <div className='duration-filter' >
                        <h2>Filter By Duration</h2>
                        <span><ToggleSwitch /> Less than 5 minutes</span>
                        <span><ToggleSwitch /> Less than 15 minutes</span>
                        <span><ToggleSwitch /> Less than 30 minutes</span>
                        <span><ToggleSwitch /> Less than 1 hour</span>
                        <span><ToggleSwitch /> 1 - 1.5 hours</span>
                        <span><ToggleSwitch /> More than 1.5 hours</span>
                    </div>
                </div>
                <div className='total-resource-list'>
                    <div className='control-panel'>
                        <input type="text" id="searchBar" name="searchBar" />
                        <select class="ready-made" id="ready-made">
                            <option value="0">Become an Ally/Accomplice/Co-Conspirator</option>
                            <option value="0">Become an Antiracist Educator</option>
                            <option value="0">Become and Antiracist Researcher</option>
                            <option value="0">Shape an Antiracist School Culture</option>
                            <option value="0">Create an Antiracist Classroom </option>
                            <option value="0">Engage in Tough Conversations</option>
                            <option value="0">Explore Intersectionality</option>
                        </select>
                        <button className='my-list-button'>My List</button>
                    </div>
                    <div className='output-list'>
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                        <SingleResource />
                    </div>
                    <div className='footer-control-panel'>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default ResourceCollection;