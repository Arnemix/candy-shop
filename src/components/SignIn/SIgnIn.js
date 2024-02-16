import './SignIn.css';

function SignInModal({ onClose }) {
    return (
        <div className="modal">
            <div className="login-container">
                <div className="login-header">
                    <div>Login</div>
                    <button onClick={onClose}>✖</button>
                </div>
                <input type="text" className="login-input" placeholder="Email" id="email" />
                <input type="password" className="login-input" placeholder="Password" id="password" maxLength="15" minLength="8" />
                <button className="login-button" id="login-button">Login</button>
            </div>
            
        </div>
    );
}

export default SignInModal;