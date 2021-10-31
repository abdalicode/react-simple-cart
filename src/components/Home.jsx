import React from "react";
import SideBar from "./SideBar";
import ProductList from "./ProductList";
const Home = () => {
   return (
      <div className="ui container stackable two column grid ">
         <div className="three wide column">
            <SideBar />
         </div>
         <div className="thirteen wide column container">
            <ProductList />
         </div>
      </div>
   );
};

export default Home;
