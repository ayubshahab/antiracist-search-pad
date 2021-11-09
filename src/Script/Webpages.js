//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from './HomePage/HomePage';
import ResourcePage from './ResourcePage/ResourcePage';
function Webpages(){
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resource-page" element={<ResourcePage />} />
        </Routes>
    );
};
export default Webpages;