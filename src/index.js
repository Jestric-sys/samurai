import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  {id: 1, message: 'Hi, how ara you?', like: 15},
  {id: 2, message: 'My first post', like: 20}
];

const dialogsData = [
  {id: 1, name: 'Denis'},
  {id: 2, name: 'Vladimir'},
  {id: 3, name: 'Tommy'}
];

const messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hou ara you?'},
  {id: 3, message: 'Welcome new chat'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
