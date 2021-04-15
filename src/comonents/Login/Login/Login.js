import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from '../LoginManager/LoginManager';
import Navbar from '../../Home/Navbar/Navbar';



function Login() {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    return (
        <div className="container">
            <div>
                <Navbar/>
            </div>
            <div className="container d-flex justify-content-center py-5">
                {
                    loggedInUser.isSignedIn ? <button className="btn btn-danger" onClick={signOut}>Log Out</button> :
                        <button className="btn btn-brand text-white" onClick={googleSignIn}><FontAwesomeIcon className="google-icon" icon={faGoogle} /> Continue With Google</button>
                }
            </div>
        </div>
    );
}

export default Login;