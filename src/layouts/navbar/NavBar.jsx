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
    const products = useSelector((state) => state.productsReducers);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    useEffect(() => {
        // console.log(products);
    }, [products]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const fctSignIn = () => {
        setShowSignInModal(true);
    };

    const fctSignUp = () => {
        setShowSignUpModal(true);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                <input type="text" placeholder="dragibus, candy ..." onChange={handleSearchChange} />
                <div className="dropdown">
                    {filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    ))}
                </div>
            </div>
            <div className="buttonGroup">
                <div>
                    <p>User : {}</p>
                </div>
                <button onClick={fctSignIn}>Sign in</button>
                {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} />}
                <button onClick={fctSignUp}>Sign up</button>
                {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
            </div>
        </div>
    );
}

export default NavBar;