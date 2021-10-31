import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import ProductCard from "./ProductCard";
const ProductList = () => {
   const { products } = useContext(ProductContext);
   return (
      <div className="ui cards centered">
         {products.map((product, i) => (
            <ProductCard product={product} key={i} />
         ))}
      </div>
   );
};

export default ProductList;
