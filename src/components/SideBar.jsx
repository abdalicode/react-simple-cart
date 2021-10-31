import React from "react";

const SideBar = () => {
   return (
      <div
         className="ui vertical inverted menu "
         style={{ position: "sticky", top: "20px", width: "100%" }}
      >
         <div className="item">
            <div className="header">Sort by what</div>
            <div className="menu">
               <a href="/" className="item">
                  hell
               </a>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
