import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
const ProductCard = ({ product }) => {
   const { cartState, cartDispath } = useContext(ProductContext);
   const addToCart = (product) => {
      cartDispath({
         type: "ADD_TO_CART",
         payload: product,
      });
   };
   const removeFromCart = (product) => {
      cartDispath({
         type: "REMOVE_FROM_CART",
         payload: product.id,
      });
   };
   return (
      <div className="card column">
         <div className="image">
            <img src={product.img} alt="" />
         </div>
         <div className="content">
            <h2 className="header">{product.name}</h2>
            <div className="meta">
               <span>{product.department}</span>
            </div>
            <div className="description">{product.description}</div>
         </div>
         <div className="extra content">
            <span className="right floated">
               {cartState.some((pro) => pro.id === product.id) ? (
                  <button className="ui  button red " onClick={() => removeFromCart(product)}>
                     <i className="shpping cart icon"></i>
                     Remove from cart
                  </button>
               ) : (
                  <button
                     className={`ui  button  ${product.inStock < 1 ? "disabled grey" : "green"}`}
                     onClick={() => addToCart(product)}
                  >
                     <i className="shpping cart icon"></i>
                     {product.inStock < 1 ? "Not in stock" : "Add to cart"}
                  </button>
               )}
            </span>
            <span>
               <i className="dollar sign icon"></i>
               {product.price}
            </span>
         </div>
      </div>
   );
};

export default ProductCard;
