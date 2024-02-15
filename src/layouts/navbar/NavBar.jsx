import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";
import { FaCandyCane } from "react-icons/fa";
import { IoIceCream } from "react-icons/io5";
import { GiChocolateBar } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import { useSelector } from "react-redux";

function NavBar(props) {
    const product = useSelector((state) => state.productsReducers);

    useEffect(() => {
        // console.log(product);
    }, [product]);
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
            </div>
        </div>
    );
}

export default NavBar;
