import React, { useMemo } from "react";
import getListings from "./services/getListings";
import { Index } from "./pages";

function App() {
  const listings = useMemo(getListings);
  return <Index />;
}

export default App;
