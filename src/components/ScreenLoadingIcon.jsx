import React from "react";

function ScreenLoadingIcon() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center">
        {/* Falling Items */}
        <div className="absolute -top-12 space-y-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-drop1"></div>
          <div className="w-5 h-5 bg-red-500 rounded-lg animate-drop2"></div>
          <div className="w-4 h-6 bg-yellow-500 rounded animate-drop3"></div>
        </div>

       
        <div className="relative w-20 h-24 bg-[#ead0a2] rounded-b-lg shadow-lg border-4 border-[#b6832b] flex flex-col items-center justify-end">
         
          <div className="absolute top-[-8px] left-0 right-0 mx-auto w-[50px] h-[16px] bg-transparent border-t-2 border-[#b6832b] rounded-full"></div>

          
          <div className="absolute inset-0 flex items-center justify-center text-[#b6832b] font-bold text-sm">
            QuickPick
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenLoadingIcon;
