import React from 'react';
import './SignUp.css';

function SignUpModal({ onClose }) {
    return (
        <div className="modal">
            <form className="form">
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input required placeholder="" type="text" className="input" />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required placeholder="" type="text" className="input" />
                        <span>Lastname</span>
                    </label>
                </div>  

                <label>
                    <input required placeholder="" type="email" className="input" />
                    <span>Email</span>
                </label> 

                <label>
                    <input required placeholder="" type="password" className="input" />
                    <span>Password</span>
                </label>
                <label>
                    <input required placeholder="" type="password" className="input" />
                    <span>Confirm password</span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">Already have an account ? <a href="#">Signin</a> </p>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default SignUpModal;