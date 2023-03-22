import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './AuthPage/Login'
import SignUp from './AuthPage/SignUp'
import Courses from './Pages/Courses'
import Videos from './Courses/Videos'
import Files from './Courses/Files'
import Introduction from './Courses/Introduction'
import Quizes from './Courses/Quizes'
import Dashboard from './Admin/Dashboard'
import ManageAssesment from './Admin/ManageAssesment'
import ManageCourse from './Admin/ManageCourse'
import ManageExams from './Admin/ManageExams'
import ManageStudents from './Admin/ManageStudents'
import Home from './Pages/Home'
import EditAss from './Admin/AssButton/EditAss'
import EditCourse from './Admin/CourseButton/EditCourse'
import VidoeEdit from './Admin/CourseButton/VidoeEdit'
import UpdateDoc from './Admin/CourseButton/UpdateDoc'
import UpdateIntro from './Admin/CourseButton/UpdateIntro'
import UpdateVideo from './Admin/CourseButton/VideoEdit/UpdateVideo'
import VidEditPage from './Admin/CourseButton/VideoEdit/VidEditPage'
import DocMainEdit from './Admin/CourseButton/DocEdit/DocMainEdit'

function RoutesPage() {
  return (
    <div>
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
          <Route path='/edit' Component={EditAss}/>
          <Route path='/vidEdit' Component={VidoeEdit}/>
          <Route path='/docEdit' Component={UpdateDoc}/>
          <Route path='/introEdit' Component={UpdateIntro}/>
          <Route path='/indVideo' Component={VidEditPage}/>
          <Route path='/indVidUpdate' Component={UpdateVideo}/>
          <Route path='/editDoc' Component={DocMainEdit}/>
          <Route path='/updateDoc' Component={UpdateDoc}/>


          <Route path='/editCourse' Component={EditCourse}/>
          <Route path = '/' Component = {Home} />
      </Routes>
    </div>
  )
}

export default RoutesPage