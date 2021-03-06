import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from '@motor-js/engine'

ReactDOM.render(
  <React.StrictMode>
  <Motor
    config={{
      //Enter your app config here..
      host: "motor.eu.qlikcloud.com",
      secure: true,
      port: null,
      prefix: "",
      appId: "9cc8db2f-ddb2-4570-97a4-30b7254e8401",
      webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
      qcs: true,
    }}
  >
    <App />
  </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
