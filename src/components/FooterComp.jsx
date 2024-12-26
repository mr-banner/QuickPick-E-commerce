import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const FooterComp = () => {
  return (
    <>
      <div className=" mt-16 grid sm:grid-cols-3 grid-cols-1 gap-y-6 sm:gap-x-36">
        <div className="flex flex-col justify-between">
          <Link to="/">
           
            <img
              onClick={()=> (window.scrollTo(0,0))}
              className="w-[160px] mb-3 relative top-[-20px] left-[100px] sm:left-[-19px] sm:top-0"
              src={assets.logo}
              alt=""
            />
          </Link>
          <p className="text-sm font-light w-full  ">
            <span className="font-bold text-center">
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
        <div className="flex flex-col justify-evenly  ">
          <h2 className="font-bold ">COMPANY</h2>
          <NavLink to="/" onClick={()=> (window.scrollTo(0, 0))}> Home</NavLink>
          <Link to="/about"> About Us</Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/">PrivacyPolicy</Link>
        </div>
        <div className="flex flex-col justify-evenly ">
          <h2 className="font-bold">GET IN TOUCH</h2>
          <a href="tel:07978112145"> +91 7978112145</a>
          <a href="mailto:soumyapanda780@gmail.com">quickpick@gmail.com</a>
        </div>
      </div>
      <div className="text-center text-sm mt-10 py-5 border-t border-gray-300">
        <p>Copyright 2024@ quickpick.com - All Right Reserved.</p>
      </div>
    </>
  );
};

export default FooterComp;
