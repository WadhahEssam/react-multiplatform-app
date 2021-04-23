import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Logo from './assets/logo.png';

import './index.css';

const App: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState(``);
  const [counter, setCounter] = React.useState(0);

  document.addEventListener('keydown', (e: { keyCode: number }) => {
    switch (e.keyCode) {
      case 37:
        setClickedButton(`LEFT arrow`);
        break;
      case 38:
        setClickedButton(`UP arrow`);
        break;
      case 39:
        setClickedButton(`RIGHT arrow`);
        break;
      case 13:
        setClickedButton(`OK button`);
        break;
      case 10009: // RETURN button
        tizen.application.getCurrentApplication().exit();
        break;
      default:
        setClickedButton(`${e.keyCode}`);
        break;
    }
  });

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={Logo} />
      <div>Welcome to React Multiplatform App (WebOS)</div>
      <p style={{ fontSize: 30, marginTop: 50 }}>{counter}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          type="button"
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: '50%',
            backgroundColor: '#61DAFB',
            borderColor: 'gray',
            borderWidth: 1,
            margin: '10px 10px',
            fontSize: 30,
            color: 'white',
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setCounter(counter !== 0 ? counter - 1 : counter);
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: '50%',
            backgroundColor: '#61DAFB',
            borderColor: 'gray',
            borderWidth: 1,
            margin: '10px 10px',
            fontSize: 30,
            color: 'white',
          }}
        >
          -
        </button>
      </div>
      {clickedButton && <p>{clickedButton}</p>}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
