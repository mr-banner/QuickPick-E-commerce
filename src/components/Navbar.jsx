import React from "react";
import logo from "../assets/logo.png";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const { setShowSearch, getCartCount } = React.useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center sm:py-2 font-medium bg-white dark:bg-gray-900 text-black dark:text-white">
      <Link to="/">
        {/* Light mode logo */}
        <img
          src={logo}
          alt="logo"
          className="sm:w-[163px] sm:h-[103px] w-[115px] h-[95px] object-contain dark:hidden"
        />
        {/* Dark mode logo */}
        <img
          src={assets.dark_icon} // add dark mode logo in assets.js
          alt="logo"
          className="sm:w-[163px] sm:h-[103px] w-[115px] h-[95px] object-contain hidden dark:block"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-600 dark:text-gray-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#da9a5a]" : "text-gray-700 dark:text-gray-300"} flex flex-col items-center gap-1 hover:text-[#da9a5a] dark:hover:text-[#da9a5a] transition-colors duration-300`
          }
        >
          <p>HOME</p>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `${isActive ? "text-[#da9a5a]" : "text-gray-700 dark:text-gray-300"} flex flex-col items-center gap-1 hover:text-[#da9a5a] dark:hover:text-[#da9a5a] transition-colors duration-300`
          }
        >
          <p>COLLECTION</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#da9a5a]" : "text-gray-700 dark:text-gray-300"} flex flex-col items-center gap-1 hover:text-[#da9a5a] dark:hover:text-[#da9a5a] transition-colors duration-300`
          }
        >
          <p>ABOUT</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-[#da9a5a]" : "text-gray-700 dark:text-gray-300"} flex flex-col items-center gap-1 hover:text-[#da9a5a] dark:hover:text-[#da9a5a] transition-colors duration-300`
          }
        >
          <p>CONTACT</p>
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `${isActive ? "text-[#da9a5a]" : "text-gray-700 dark:text-gray-300"} flex flex-col items-center gap-1 hover:text-[#da9a5a] dark:hover:text-[#da9a5a] transition-colors duration-300`
          }
        >
          <p>ORDERS</p>
        </NavLink>
      </ul>

      <div className="flex justify-center items-center gap-6">
        {location.pathname.includes("collection") && (
          <img
            className="w-5 object-contain cursor-pointer"
            src={assets.search_icon}
            alt="search icon"
            onClick={() => setShowSearch(true)}
          />
        )}
        <NavLink
          className="text-md sm:block hidden font-normal shadow-lg text-gray-800 dark:text-white border hover:border-gray-950 dark:hover:border-white border-gray-400 p-[8px] rounded-3xl"
          to="/admin-login"
        >
          Admin Login
        </NavLink>
        <ThemeToggle />
        <div className="group relative">
          <img
            className="w-5 object-contain cursor-pointer dark:text-white"
            src={assets.profile_icon}
            alt="profile icon"
            onClick={() => navigate("/login")}
          />
        </div>
        <Link to="/cart" className="relative cursor-pointer">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] -bottom-[8px] w-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-center leading-4 aspect-square text-[9px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
