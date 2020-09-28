import React from "react";

import "./App.css";
import Home from "./pages/home";
import Seller from "./pages/seller";
import Buyer from "./pages/buyer";
import NavBar from "./components/navBar";


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sellers" component={Seller} />
        <Route path="/buyers" component={Buyer} />

      </Switch>
    </main>
  );
}

export default App;
