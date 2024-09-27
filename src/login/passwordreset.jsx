import React, { useState } from 'react';
import './passwordreset.css';

const PasswordReset = () => {
    const [email, setEmail] = useState('');

    const handleReset = async () => {
        console.log('Reset link sent to:', email);
    };

    
    return (
        <div className ="password-reset-container">
            <div className = "password-reset-row">
            <h1>Reset Your Password</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="password-reset-input"
            />
            <button onClick={handleReset} className= "password-reset-button">
                Send Reset Link
                </button>
        </div>
        </div>
    );
};

export default PasswordReset;
