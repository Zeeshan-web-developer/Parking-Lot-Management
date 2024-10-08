import React from "react";
import PropTypes from "prop-types"; // ES6

import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
const Header = ({ children }) => {
  return (
    <header className="bg-background text-white shadow-md mb-2">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="#" className="link__hover">
            <h2 className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
              KanzWay
            </h2>
          </Link>
        </div>

        <div>{children ? children : null}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
