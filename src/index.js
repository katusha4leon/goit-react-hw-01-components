import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './components/data/user.json'
import data from './components/data/data.json'
import friends from'./components/data/friends.json'
import transactions from './components/data/transactions.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App datauser = {user} data = {data} friends = {friends} items={transactions}  />
  </React.StrictMode>
);