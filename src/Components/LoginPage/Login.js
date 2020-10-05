import React, { useContext, useState } from 'react';
import logo from '../../logo.png';
import google from '../../google.png';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FirebaseConfig from './FirebaseConfig'
import { UserContext } from '../../App';
firebase.initializeApp(FirebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { work } = useParams();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: `/volunteerreg/${work}` } };

    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, photoURL, email, emailVerified } = result.user;
            const signedInUser = { name: displayName, email: email, photoURL: photoURL, emailVerified }
            setLoggedInUser(signedInUser);
            history.replace(from)
        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <div className='container text-center mt-5'>
            <div className='mb-5'>
                <img style={{ width: '250px' }} src={logo} alt="" />
            </div>
            <div className='border' style={{ height: '300px', width: '550px', padding: '50px', margin: 'auto' }}>
                <h3>Login With</h3>
                <div className='d-flex justify-content-center my-3'>
                    <button className='d-flex' style={{ border: '1px solid lightgrey', width: '350px', height: '50px', borderRadius: '30px', display: 'flex', backgroundColor: 'white' }} onClick={googleLogin}>
                        <img style={{ width: '30px', height: '30px' }} className='mt-2' src={google} alt="" />
                        <p className='pt-2 ml-5'>Continue With Google</p>
                    </button>
                </div>
                <p>Don't have an account? <Link to='/volunteerreg'>Create a new account</Link> </p>
            </div>
        </div>
    );
};

export default Login;