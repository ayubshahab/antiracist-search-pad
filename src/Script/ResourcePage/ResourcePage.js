import React from "react";
import Navbar from '../Navbar';
import ResourceCollection from "./ResourceCollection";
function ResourcePage(){
    return(
        <div className = 'resourcepage'>
            <Navbar />
            <ResourceCollection />
        </div>
    );
}

export default ResourcePage;