// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Style/Login.css';

function Login() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });

            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button id='Login-Button' type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
