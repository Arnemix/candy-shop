import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";
import { FaCandyCane } from "react-icons/fa";
import { IoIceCream } from "react-icons/io5";
import { GiChocolateBar } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";

function NavBar(props) {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={Logo} alt="Candy shop logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">
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
                        <Link to="/candies">
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
