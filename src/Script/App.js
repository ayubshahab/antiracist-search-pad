import '../Styling/App.css';
// import Navbar from './HomePage/Navbar';
// import LandingSection from './HomePage/LandingSection';
// import AboutSearchPad from './HomePage/AboutSearchPad';
// import InfographicArea from './HomePage/InfographicArea';
// import AboutUS from './HomePage/AboutUS';
// import ContactUS from './HomePage/ContactUS';
// import Login from './HomePage/Login';
// import Logout from './HomePage/Logout';


import Webpages from './Webpages';
import { BrowserRouter } from 'react-router-dom';
//client id
//474735171301-obhseclqtotrevfscqabp3uoh06uqth1.apps.googleusercontent.com

//client secret
//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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Webpages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
