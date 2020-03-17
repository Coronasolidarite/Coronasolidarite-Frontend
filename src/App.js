import React from "react";
import { Index, Listings } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="csf-main-container">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
