import React from "react";
import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Header = () => {
  return (
    <header className="bg-nav text-white shadow-md mb-2">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="#" className="hover:text-gray-300">
            <img src={Logo} alt="Parking Lot Management" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <a to="#" className="hover:text-gray-300">
            Home
          </a>
          <Link to="#" className="hover:text-gray-300">
            About
          </Link>
          <Link to="#" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="#" className="hover:text-gray-300">
            Help
          </Link>
        </nav>

        <div>
          <Link
            to="#"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
