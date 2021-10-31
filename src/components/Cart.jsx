import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
const Cart = () => {
   const { cartState } = useContext(ProductContext);
   return (
      <div className="ui container">
         <div className="ui called list">
            {cartState.map((item, i) => (
               <CartItem item={item} key={i} />
            ))}
         </div>
         <div className="ui placeholder segment">
            <div className="ui icon header">
               <i className="cart arrow down icon"></i>
               TOTAL PRICE :{" "}
               {cartState.reduce((acc, curr) => {
                  return acc + Number(curr.price) * curr.qua;
               }, 0)}
            </div>
            <div className="ui primary button">Proceed to checkout</div>
         </div>
      </div>
   );
};
const CartItem = ({ item }) => {
   const { cartDispath } = useContext(ProductContext);
   const removeFromCart = (product) => {
      cartDispath({
         type: "REMOVE_FROM_CART",
         payload: product.id,
      });
   };
   const changeQuantity = (product, qua) => {
      cartDispath({
         type: "CHANGE_QUANTITY",
         payload: { product, qua },
      });
   };
   return (
      <div
         className="item"
         style={{
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderBottom: "1px solid gray",
         }}
      >
         <div className="right floated content">
            <div className="ui form">
               <div
                  className="three fields"
                  style={{ display: "flex", alignItems: "center", height: "100%" }}
               >
                  <div className="ui tag labels">
                     <span className="ui label">${item.price * item.qua}</span>
                  </div>
                  <div className="field">
                     <select
                        value={item.qua}
                        className="ui fluid dropdown"
                        onChange={(e) => {
                           changeQuantity(item, e.target.value);
                        }}
                     >
                        {[...Array(item.inStock)].map((un, i) => {
                           return (
                              <option key={i} value={i + 1}>
                                 {i + 1}
                              </option>
                           );
                        })}
                     </select>
                  </div>
                  <div className="field">
                     <button className="ui  button red " onClick={() => removeFromCart(item)}>
                        Remove
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <img src={item.img} alt="" className="ui avatar image" />
         <div className="content" style={{ maxWidth: "50%" }}>
            <div className="header">{item.name}</div>
            {item.description}
         </div>
      </div>
   );
};
export default Cart;
