import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";
const Header = () => {
   const { cartState } = useContext(ProductContext);
   return (
      <div className="ui container small menu">
         <Link to="/" className="item active">
            Home
         </Link>
         <div className="right menu">
            <h1 className="ui header grey">Shopping Cart</h1>
         </div>
         <div className="right menu">
            <Link to="/cart" className="ui  button green ">
               <i className="shpping cart icon"></i>
               Cart
               <span
                  style={{
                     display: "inlin-block",
                     backgroundColor: "white",
                     borderRadius: "50%",
                     color: "green",
                     padding: "5px 10px",
                     marginLeft: "5px",
                  }}
               >
                  {cartState.length}
               </span>
            </Link>
         </div>
      </div>
   );
};

export default Header;
