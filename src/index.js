import React, { useState } from "react";
import ReactDOM from "react-dom";

import Logo from './assets/logo.png';
import './index.css';

const App = () => {
  const [clickedButton, setClickedButton] = useState(null);

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
      <div style={{ fontFamily: "sans-serif" }}>
        Welcome to React Multiplatform App
      </div>
      {clickedButton && <p>{clickedButton}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));