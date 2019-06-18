import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import CatList from "./CatList";
import Cat from "./Cat";

function App() {
  const availableCats = [
    { name: "Tuffy", age: 1, src: "https://placekitten.com/606/425" },
    { name: "Tommy", age: 3, src: "https://placekitten.com/602/425" },
    { name: "Bucky", age: 1.5, src: "https://placekitten.com/609/425" },
    { name: "Lucky", age: 4, src: "https://placekitten.com/604/425" }
  ];

  return (
    <div className="antialiased">
      <Navbar cats={availableCats} />

      <Route
        exact
        path="/cat"
        render={routerProps => <CatList cats={availableCats} />}
      />

      <Route
        exact
        path="/cat/:catName"
        render={routerProps => <Cat {...routerProps} cats={availableCats} />}
      />

      <Redirect to="/cat" />
    </div>
  );
}

export default App;
