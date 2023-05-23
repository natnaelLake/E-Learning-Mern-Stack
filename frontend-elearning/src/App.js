import logo from "./logo.svg";
import "./App.css";
// import {Routes,Route} from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'

import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
// import Login from './Pages/Login'

import Header from "./Pages/Header";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,Navigate } from "react-router-dom";

import Introduction from "./Courses/Introduction";
import Files from "./Courses/Files";
import Videos from "./Courses/Videos";
import Quizes from "./Courses/Quizes";
import ManageExams from "./Admin/ManageExams";
import ManageCourse from "./Admin/ManageCourse";
import ManageAssesment from "./Admin/ManageAssesment";
import Dashboard from "./Admin/Dash";
import ManageStudents from "./Admin/ManageStudents";
import Routers from "./Routers";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
