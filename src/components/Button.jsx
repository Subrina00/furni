import React from "react";

function Button({ children, onClick}) {
    return (
      <button onClick={onClick} className="px-4 py-1 bg-gray-700 text-white rounded-[5px] 
      hover:bg-gray-800 cursor-pointer duration-300">
        {children}
    </button>  
    );
    
}

export default Button;