import React from "react";
import { assets } from "../assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md-text-base text-gray-700">
        <div className="shadow-lg dark:shadow-[0_2px_15px_5px_rgba(55,65,81,0.7)] p-5 rounded-md">
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold dark:text-gray-100">Easy Exchange Policy</p>
            <p className="text-gray-400 dark:text-gray-200">We offer hasle free exchange policy</p>
        </div>
        <div className="shadow-lg dark:shadow-[0_2px_15px_5px_rgba(55,65,81,0.7)] p-5 rounded-md">
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold dark:text-gray-100">7 days return policy</p>
            <p className="text-gray-400 dark:text-gray-200">We provide 7 days free return policy</p>
        </div>
        <div className="shadow-lg dark:shadow-[0_2px_15px_5px_rgba(55,65,81,0.7)] p-5 rounded-md">
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold dark:text-gray-100">Best Customer Support</p>
            <p className="text-gray-400 dark:text-gray-200">We provide 24/7 customer support</p>
        </div>
    </div>
  );
};

export default OurPolicy;
