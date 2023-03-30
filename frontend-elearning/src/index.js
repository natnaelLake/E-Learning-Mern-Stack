import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import {AuthContextProvider} from  './Context/AuthContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ProSidebarProvider>
);

