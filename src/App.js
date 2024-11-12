import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Grid } from "./components/Game/Grid";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
