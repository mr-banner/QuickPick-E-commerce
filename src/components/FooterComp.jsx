import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const FooterComp = () => {
  return (
    <>
      <div className="mt-16 grid sm:grid-cols-3 grid-cols-1 gap-y-6 sm:gap-x-36">
        <div className="flex flex-col gap-3 -mt-6">
          <Link to="/">
            {/* Light mode logo */}
            <img
              onClick={() => window.scrollTo(0, 0)}
              className="w-[160px] mb-3 relative top-[-20px] left-[80px] sm:left-[-19px] sm:top-0 dark:hidden"
              src={assets.logo} // light mode logo
              alt="Logo"
            />
            {/* Dark mode logo */}
            <img
              onClick={() => window.scrollTo(0, 0)}
              className="w-[200px] mb-3 relative top-[-20px] right-[80px]  sm:left-[-19px] sm:top-0 hidden dark:block"
              src={assets.dark_icon} // dark mode logo
              alt="Logo"
            />
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium w-full">
            <span className="font-bold text-gray-900 dark:text-gray-50 text-center">
              Shop Smart. Shop Fast. Only at Quick Pick!
            </span>
            <br />
            At Quick Pick, we bring you a seamless shopping experience with a
            focus on speed, quality, and convenience. Discover a wide range of
            products, handpicked to meet your needs, all at the click of a
            button. Whether you're shopping for essentials or treating yourself
            to something special, we ensure quick delivery and hassle-free
            service.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-50">
          <h2 className="font-bold text-gray-900 dark:text-gray-50">COMPANY</h2>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}> Home</NavLink>
          <Link to="/about" className="hover:text-gray-900 dark:text-gray-50"> About Us</Link>
          <Link to="/contact" className="hover:text-gray-900 dark:text-gray-50"> Contact </Link>
          <Link to="/policy" className="hover:text-gray-900 dark:text-gray-50">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-50">
          <h2 className="font-bold text-gray-900 dark:text-gray-50">GET IN TOUCH</h2>
          <a className="hover:text-gray-900 dark:text-gray-50" href="tel:0680-324524">0680-324524</a>
          <a className="hover:text-gray-900 dark:text-gray-50" href="mailto:quickpick@gmail.com">quickpick@gmail.com</a>
        </div>
      </div>
      <div className="text-center text-sm mt-10 py-5 border-t border-gray-300">
        <p>Copyright 2024@ quickpick.com - All Right Reserved.</p>
      </div>
    </>
  );
};

export default FooterComp;
