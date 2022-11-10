import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'; // To make the Ant Design styles available

import './index.css';
import App from './App';


//To make the Ant Design styles available in the entire app //
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
