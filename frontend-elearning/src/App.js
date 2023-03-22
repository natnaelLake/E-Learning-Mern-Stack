import logo from './logo.svg';
import './App.css';
// import {Routes,Route} from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'

import Home from './Pages/Home'
import Courses from './Pages/Courses'
// import Login from './Pages/Login'
import Login from './AuthPage/Login'
import SignUp from './AuthPage/SignUp'
import Header from './Pages/Header';
import {BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';  
import Introduction from './Courses/Introduction';
import Files from './Courses/Files';
import Videos from './Courses/Videos';
import Quizes from './Courses/Quizes';
import ManageExams from './Admin/ManageExams';
import ManageCourse from './Admin/ManageCourse';
import ManageAssesment from './Admin/ManageAssesment';
import Dashboard from './Admin/Dashboard';
import ManageStudents from './Admin/ManageStudents';
import Routes from './Routes'


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
