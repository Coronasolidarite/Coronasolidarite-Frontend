import React from "react";
import { Index, Listings, Legal, TOU } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="csf-page">
        <Header />
        <div className="csf-main-container">
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/listings">
              <Listings />
            </Route>
            <Route path="/legal">
              <Legal />
            </Route>
            <Route path="/tou">
              <TOU />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
