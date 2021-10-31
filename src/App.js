import React from "react";
import Routes from "./config/Routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
   return (
      <Router>
         <Route
            render={(props) => (
               <>
                  <Header />
                  <Routes />
               </>
            )}
         />
      </Router>
   );
};

export default App;
