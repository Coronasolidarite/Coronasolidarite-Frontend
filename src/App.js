import React from "react";
import { Index, Listings } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
