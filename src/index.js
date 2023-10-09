import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user.json'
import data from './data/data.json'
import friends from'./data/friends.json'
import transactions from './data/transactions.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App datauser = {user} data = {data} friends = {friends} items={transactions}  />
  </React.StrictMode>
);