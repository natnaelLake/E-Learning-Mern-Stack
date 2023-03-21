import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
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



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
          <Route path='/login' Component={Login}/> 
          <Route path='/signup' Component={SignUp}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          <Route path='/courses' Component={Courses}/>
          <Route path='/videos' Component={Videos}/>
          <Route path='/files' Component={Files}/>
          <Route path='/intro' Component={Introduction}/>
          <Route path='/quizes' Component={Quizes}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/assessment' Component={ManageAssesment}/>
          <Route path='/mntcourse' Component={ManageCourse}/>
          <Route path='/exams' Component={ManageExams}/>
          <Route path='/students' Component={ManageStudents}/>
          <Route path = '/' Component = {Home} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
