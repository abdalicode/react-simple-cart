import React, { useReducer, createContext, useEffect } from "react";
import { productsReducer, cartReducer } from "./Reducer";
import faker from "faker";
import { v4 as uuid4 } from "uuid";
faker.seed(99);
const initialValue = {
   products: [],
};
for (let i = 0; i < 40; i++) {
   initialValue.products.push({
      id: uuid4(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      adjective: faker.commerce.productAdjective(),
      img: faker.random.image(),
      inStock: faker.random.arrayElement([0, 4, 8, 10, 12, 3]),
   });
}

export const ProductContext = createContext();

const Context = ({ children }) => {
   const [productState, productsDispath] = useReducer(productsReducer, initialValue);
   const initialCartState =
      localStorage.getItem("cartState") === null
         ? []
         : JSON.parse(localStorage.getItem("cartState"));

   const [cartState, cartDispath] = useReducer(cartReducer, initialCartState);

   useEffect(() => {
      localStorage.setItem("cartState", JSON.stringify(cartState));
   }, [cartState]);

   return (
      <ProductContext.Provider
         value={{ products: productState.products, productsDispath, cartState, cartDispath }}
      >
         {children}
      </ProductContext.Provider>
   );
};
export default Context;
