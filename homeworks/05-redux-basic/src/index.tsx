import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';
import store from './redux/store';
import { TActions } from './redux/balance/types';

const array: TActions[] = [
  { type: "UPDATE_BALANCE", payload: 1000.0 },
  { type: "CREDIT", payload: 200.0 },
  { type: "CREDIT", payload: 100.0 },
  { type: "SET_BALANCE_WITH_TAX", payload: 14.0 },
  { type: "DEBIT", payload: 250.0 },
  { type: "UPDATE_BALANCE", payload: 1000.0 },
];

array.forEach(action => store.dispatch(action));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
