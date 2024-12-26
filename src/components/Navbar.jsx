import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const {setShowSearch} = React.useContext(ShopContext);
  return (
    <div className="flex justify-between items-center sm:py-4 font-medium">
      <Link to="/">
      <img
        src={logo}
        alt="logo"
        className="sm:w-[123px] sm:h-[103px] w-[115px] h-[95px] object-contain"
      />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex justify-center gap-6">
        <img
          className="w-5 object-contain cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
          onClick={()=>setShowSearch(true)}
        />

        <div className="group relative">
          <img
            className="w-5 object-contain cursor-pointer"
            src={assets.profile_icon}
            alt="profile icon"
          />
          <div className="group-hover:block hidden absolute pt-3 right-0 dropdown-menu">
            <div className="flex flex-col gap-2 bg-slate-150 px-5 py-4 w-36 shadow-xl rounded-md text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative cursor-pointer">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] w-4 bottom-[-5px] rounded-full bg-black text-white text-center leading-4 aspect-square text-[9px]">10</p>
        </Link>
        <img onClick={()=>{setToggle(!toggle)}} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-trnsform ease-in-out delay-75 duration-700 ${toggle ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center p-4 gap-4">
              <img onClick={()=>{setToggle(!toggle)}} src={assets.dropdown_icon} className="rotate-180 h-4 cursor-pointer" alt="" />
              <p>Back</p>
          </div>
          <NavLink onClick={() => {setToggle(!toggle)}} to='/' className='text-black py-2 pl-6 border'>HOME</NavLink>
          <NavLink onClick={() => {setToggle(!toggle)}} to='/collection' className='text-black py-2 pl-6 border'>COLLECTION</NavLink>
          <NavLink onClick={() => {setToggle(!toggle)}} to='/about' className='text-black py-2 pl-6 border'>ABOUT</NavLink>
          <NavLink onClick={() => {setToggle(!toggle)}} to='/contact' className='text-black py-2 pl-6 border'>CONTACT</NavLink>  
        </div>
      </div>  
    </div>
  );
};

export default Navbar;
