import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";

const Routes = () => {
   return (
      <Switch>
         <Route path="/" exact>
            <Home />
         </Route>
         <Route path="/cart" exact>
            <Cart />
         </Route>
      </Switch>
   );
};

export default Routes;
