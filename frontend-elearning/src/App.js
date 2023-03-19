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

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={SignUp}/>
          <Route path='/courses' Component={Courses}/>
          <Route path = '/' Component = {Home} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
