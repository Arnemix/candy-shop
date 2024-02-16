import React, { useState } from 'react';
import './SignUp.css';

function SignUpModal({ onClose, onSignUp }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSignUp({ firstname: username });
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <div className="signup-container">
                    <div className="signup-header">
                        <div>Sign Up</div>
                        <button onClick={onClose}>✖</button>
                    </div>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Username" 
                        id="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input type="password" className="signup-input" placeholder="Password" id="password" maxLength="15" minLength="8" />
                    <button className="signup-button" id="signup-button" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpModal;