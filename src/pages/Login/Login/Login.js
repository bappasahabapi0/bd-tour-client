import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import "./Login.css"

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    //---------------> HANDLE  GOGLE  REDIRECT  
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const handleGoogleLogin = () => {


        signInUsingGoogle()
            .then(result => {
                history.push(redirectUri);
            })
    };
    //----------------------------------->

    return (
        <div className="login mt-5 ">
            <h1 className="text-warning fw-bolder">  Please Log in first 👇 </h1> <br /><br /><br />
            <h1>👥</h1> <br />
            <button onClick={handleGoogleLogin} className="btn-warning p-4 fw-bold fs-5 mt-3 rounded-pill border-0">Google Sign In</button>
        </div>
    );
};

export default Login;