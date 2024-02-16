import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FaCandyCane } from "react-icons/fa";
import { IoIceCream } from "react-icons/io5";
import { GiChocolateBar } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import SignInModal from "../../components/SignIn/SIgnIn";
import SignUpModal from "../../components/SignUp/SignUp";

function NavBar(props) {
    const product = useSelector((state) => state.productsReducers);

    useEffect(() => {
        // console.log(product);
    }, [product]);

    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const fctSignIn = () => {
        setShowSignInModal(true);
    };

    const fctSignUp = () => {
        setShowSignUpModal(true);
    };

    return (
        <div className="navbar">
            <Link to="/">
                <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Candy shop logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/chips">
                            Chips <GiChipsBag />
                        </Link>
                    </li>
                    <li>
                        <Link to="/chocolates">
                            Chocolates <GiChocolateBar />
                        </Link>
                    </li>
                    <li>
                        <Link to="/candies">
                            Candies <FaCandyCane />
                        </Link>
                    </li>
                    <li>
                        <Link to="/ice-cream">
                            Ice Cream <IoIceCream />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="dragibus, candy ..." />
                <div className="buttonGroup">
                    <button onClick={fctSignIn}>Sign in</button>
                    {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} />}
                    <button onClick={fctSignUp}>Sign up</button>
                    {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
