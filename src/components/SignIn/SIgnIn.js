import React, { useState } from 'react';
import './SignIn.css';

function SignInModal({ onClose, onSignIn }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSignIn({ firstname: username });
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <div className="login-container">
                    <div className="login-header">
                        <div>Login</div>
                        <button onClick={onClose}>✖</button>
                    </div>
                    <input 
                        type="text" 
                        className="login-input" 
                        placeholder="Username" 
                        id="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input type="password" className="login-input" placeholder="Password" id="password" maxLength="15" minLength="8" />
                    <button className="login-button" id="login-button" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default SignInModal;