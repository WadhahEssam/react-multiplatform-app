import React from "react";
import ReactDOM from "react-dom";

import Logo from './assets/logo.png';
import './index.css';

const App = () => {
  return (
    <div>
      <div>Welcome to React multiplatform app</div>
      <img src={Logo} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));