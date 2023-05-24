import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { StudentContextProvider } from "./Context/StudentsContext";
import { FilesContextProvider } from "./Context/fileContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <ProSidebarProvider>
        <AuthContextProvider>
          <StudentContextProvider>
            <FilesContextProvider>
              <App />
            </FilesContextProvider>
          </StudentContextProvider>
        </AuthContextProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.Fragment>
);
