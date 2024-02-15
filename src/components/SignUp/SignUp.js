import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


function SignUpModal({ onClose }) {
    return (
        <div className="modal">
            <form className="form">
                <div className="header">
                    <p className="title">Register </p>
                    <button onClick={onClose}>✖</button>
                </div>
                <p className="message">Signup now and get full access to our shop. </p>
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
            </form>

        </div>
    );
}

export default SignUpModal;