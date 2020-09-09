import React from 'react';
import './Login.css'
import {loginUrl} from './spotify'

function Login() {
    return (
        <div className = "login">
            <img src = "/assets/images/logo.png" />
            <h1>Spotify</h1>
            <a href={loginUrl}> Login With Spotify</a>
        </div>
    )
}

export default Login
