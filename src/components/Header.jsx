import React from "react";
import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Header = ({ children }) => {
  return (
    <header className="bg-nav text-white shadow-md mb-2">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="#" className="link__hover">
            <img src={Logo} alt="Parking Lot Management" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <a to="#" className="link__hover">
            Home
          </a>
          <Link to="#" className="link__hover">
            About
          </Link>
          <Link to="#" className="link__hover">
            Contact
          </Link>
          <Link to="#" className="link__hover">
            Help
          </Link>
        </nav>

        <div>{children ? children : null}</div>
      </div>
    </header>
  );
};

export default Header;
