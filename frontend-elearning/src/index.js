import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import {AuthContextProvider} from  './Context/AuthContext'
import {StudentContextProvider} from './Context/StudentsContext'
import {FilesContextProvider} from './Context/fileContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <AuthContextProvider>
      <StudentContextProvider>
        <FilesContextProvider>
          <App />
        </FilesContextProvider>
      </StudentContextProvider>
    </AuthContextProvider>
  </ProSidebarProvider>
);

