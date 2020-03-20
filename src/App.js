import React, { useState } from "react";
import { Index, Listings, Legal, TOU, Cat } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import "./App.css";
import { Select } from "semantic-ui-react";
import { languageOptions } from "./config";
import t from "./translation";

function App() {
  const [lang, setLang] = useState("fr");
  const translation = t[lang];
  return (
    <BrowserRouter>
      <div className="csf-page">
        <Header {...{ translation }} />
        <div className="csf-main-container">
          {/*<div className="csf-navigation-language">
            <Select
              options={languageOptions}
              value={lang}
              onChange={(e, { value }) => setLang(value)}
  /></div>*/}

          <Switch>
            <Route exact path="/">
              <Index {...{ translation }} />
            </Route>
            <Route path="/listings">
              <Listings {...{ translation }} />
            </Route>
            <Route path="/legal">
              <Legal {...{ translation }} />
            </Route>
            <Route path="/tou">
              <TOU {...{ translation }} />
            </Route>
            <Route path="/cat">
              <Cat {...{ translation }} />
            </Route>
          </Switch>
        </div>
        <Footer {...{ translation }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
