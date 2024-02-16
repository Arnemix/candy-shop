import React, { useState } from "react";
import { FaCandyCane } from "react-icons/fa";
import { GiChipsBag, GiChocolateBar } from "react-icons/gi";
import { IoIceCream } from "react-icons/io5";
import { Link } from "react-router-dom";
import SignInModal from "../../components/SignIn/SIgnIn";
import "./NavBar.scss";

function NavBar(props) {
    const [user, setUser] = useState();
    const [showSignInModal, setShowSignInModal] = useState(false);

    const fctSignIn = () => {
        setShowSignInModal(true);
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
            </div>
            <div className="buttonGroup">
                <div id="userMarge">
                    <p>User : {user ? user.firstname : "Guest"}</p>
                </div>
                {!user ? (
                    <>
                        <button onClick={fctSignIn}>Sign in</button>
                        {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} onSignIn={setUser} />}
                    </>
                ) : (
                    <button onClick={() => setUser(null)}>Sign out</button>
                )}
            </div>
        </div>
    );
}

export default NavBar;
