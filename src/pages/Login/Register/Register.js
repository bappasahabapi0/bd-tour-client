import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import React from 'react';
import initializeAuthentication from '../Firebase/firebse.init';
import "./Register.css";


initializeAuthentication()
const Register = () => {

    const auth = getAuth();
    // using all useState
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // handle the toggler 
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    //handle the name
    const handleNameChange = e => {
        setName(e.target.value);
    }
    // handle the email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    //handle the password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    // handle the registration
    const handleRegistration = e => {

        e.preventDefault();
        console.log(email, password);

        //check password length
        if (password.length < 6) {
            setError('password Must be at least 6 characters long.')
            return;
        }
        // using regular expression
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration} >
                <h3 className="text-warning fw-bolder">Please {isLogin ? 'Sign In' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label fw-bolder">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bolder">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="Enter your Email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bolder">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required placeholder="Enter your Password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input bg-success" type="checkbox" id="gridCheck1" />
                            <label htmlFor="gridCheck1">
                                <h2 className=""> 👈 Click Here If You Are  Already Registered This Site?</h2>
                            </label>

                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger fw-bolder">{error}</div>
                <button type="submit" className="btn btn-success rounded-pill">
                    {isLogin ? 'Sign In' : 'Register'}
                </button>


            </form>

        </div>
    );
}

export default Register;