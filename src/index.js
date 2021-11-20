import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/fontiran.css';
import './assets/css/style.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { getDirection } from './localization/index';
import * as serviceWorker from './serviceWorker'

document.getElementsByTagName('body')[0].setAttribute('dir', getDirection())
ReactDOM.render(<App />, document.getElementById('root'))

//ReactDOM.render(
//<React.StrictMode>
// <App />
// </React.StrictMode>,
// document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorker.unregister();
