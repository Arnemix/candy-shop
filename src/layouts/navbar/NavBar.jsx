import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";
import { FaCandyCane } from "react-icons/fa";
import { IoIceCream } from "react-icons/io5";
import { GiChocolateBar } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import SignInModal from '../../components/SignIn/SIgnIn';
import SignUpModal from '../../components/SignUp/SignUp';

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
                <img src={Logo} alt="Candy shop logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/chips">
                            Chips <GiChipsBag />
                        </Link>
                    </li>
                    <li>
                        <Link to="/chocolats">
                            Chocolat <GiChocolateBar />
                        </Link>
                    </li>
                    <li>
                        <Link to="/bonbons">
                            Bonbons <FaCandyCane />
                        </Link>
                    </li>
                    <li>
                        <Link to="/glaces">
                            Glaces <IoIceCream />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="dragibus, candy ..." />
                <div>
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
