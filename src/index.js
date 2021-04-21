import React from "react";
import ReactDOM from "react-dom";

import Logo from './assets/logo.png';
import './index.css';

const App = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "gray",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} />
      <div style={{ fontFamily: "sans-serif" }}>
        Welcome to React Multiplatform App
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));