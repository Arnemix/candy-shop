import React from 'react';
import './SignIn.css';

function SignInModal({ onClose }) {
    return (
        <div className="modal">
            {/* Contenu du modal */}
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default SignInModal;