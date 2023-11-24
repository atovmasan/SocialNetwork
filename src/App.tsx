import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";

let HI = () => {
  alert("Hello world!");
};

function App() {
  return (
    <div className="App">
      <Header name="Daniel" avatar="nema" LoginOrSign={HI} />
    </div>
  );
}

export default App;
