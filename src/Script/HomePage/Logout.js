import React from "react";
import {GoogleLogin} from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
function Logout(){
    const onSuccess = () =>{
        console.log('Logout Made Successfully');
    };

    return(
        <div>
            <GoogleLogin
                clientId = {clientId}
                buttonText = 'Logout'
                onLogoutSuccess = {onSuccess}
            >
            </GoogleLogin>
        </div>
    );
}

export default Logout;