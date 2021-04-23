import React, { useState } from "react";
import ReactDOM from "react-dom";

import Logo from './assets/logo.png';
import './index.css';

const App = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [counter, setCounter] = useState(0);

  document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
    case 37:
      setClickedButton(`LEFT arrow`)
      break;
    case 38:
      setClickedButton(`UP arrow`)
      break;
    case 39:
      setClickedButton(`RIGHT arrow`)
      break;
    case 13:
      setClickedButton(`OK button`)
      break;
    case 10009: //RETURN button
      tizen.application.getCurrentApplication().exit();
      break;
    default:
      setClickedButton(e.keyCode);
      break;
    }
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} />
      <div>Welcome to React Multiplatform App</div>
      <p style={{ fontSize: 30, marginTop: 50 }}>{counter}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#61DAFB",
            borderColor: "gray",
            borderWidth: 1,
            margin: "10px 10px",
            fontSize: 30,
            color: "white",
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter(counter !== 0 ? counter - 1 : counter);
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#61DAFB",
            borderColor: "gray",
            borderWidth: 1,
            margin: "10px 10px",
            fontSize: 30,
            color: "white",
          }}
        >
          -
        </button>
      </div>

      {clickedButton && <p>{clickedButton}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));