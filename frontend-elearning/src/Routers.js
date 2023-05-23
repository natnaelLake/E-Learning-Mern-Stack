import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Pages/Courses";
import Videos from "./Courses/Videos";
import Files from "./Courses/Files";
import Login from "./AuthPage/Login";
import SignUp from "./AuthPage/SignUp";
import Introduction from "./Courses/Introduction";
import Quizes from "./Courses/Quizes";
import Dashboard from "./Admin/Dash";
import ManageAssesment from "./Admin/ManageAssesment";
import ManageCourse from "./Admin/ManageCourse";
import ManageExams from "./Admin/ManageExams";
import ManageStudents from "./Admin/ManageStudents";
import Home from "./Pages/Home";
import EditAss from "./Admin/AssButton/EditAss";
import EditCourse from "./Admin/CourseButton/EditCourse";
import VidoeEdit from "./Admin/CourseButton/VidoeEdit";
import UpdateDoc from "./Admin/CourseButton/UpdateDoc";
import UpdateIntro from "./Admin/CourseButton/UpdateIntro";
import UpdateVideo from "./Admin/CourseButton/VideoEdit/UpdateVideo";
import VidEditPage from "./Admin/CourseButton/VideoEdit/VidEditPage";
import DocMainEdit from "./Admin/CourseButton/DocEdit/DocMainEdit";
import EditQuiz from "./Admin/ExamControl/EditQuiz/EditQuiz";
import Final from "./Admin/ExamControl/Final";
import Quiz from "./Admin/ExamControl/Quiz";
import Mid from "./Admin/ExamControl/Mid";
import EditMid from "./Admin/ExamControl/EditMId/EditMid";
import EditFinal from "./Admin/ExamControl/EditFinal/EditFinal";
import { useAuthContext } from "./hooks/useAuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import AddCourse from "./Admin/CourseButton/AddCourse";
import AddStudent from "./Admin/AssButton/AddStudent";
import MainCourse from "./Pages/MainCourse";
import Header from "./Pages/Header";

function RoutesPage() {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to = '/'/>} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to ='/'/>} />
          <Route
            path="/courses"
            element={user ? < Courses />: <Login />}
          />
          <Route path="/videos" element={user !== null ? <Videos />:<Login />} />
          <Route path="/files" element={user !== null ? <Files />: <Login />}/>
          <Route path="/intro" element={user !== null ? <Introduction /> : <Login />} />
          <Route path="/quizes" element={user !== null ? <Quizes /> : <Login />} />
          <Route path="/dashboard" element={user !== null ? user.user.role === 'admin' ? <Dashboard /> : <Home/> : <Login />} />
          <Route path="/assessment" element={user !== null ? user.user.role === 'admin' ? <ManageAssesment />: <Home/> : <Login />} />
          <Route path="/mntcourse" element={user !== null ? user.user.role === 'admin' ? <ManageCourse />: <Home/> : <Login />} />
          <Route path="/exams" element={user !== null ? user.user.role === 'admin' ? <ManageExams />: <Home/> : <Login />} />
          <Route path="/students" element={user !== null ? user.user.role === 'admin' ? <ManageStudents />: <Home/> : <Login />} />
          <Route path="/edit" element={user !== null ? user.user.role === 'admin' ? <EditAss />: <Home/> : <Login />} />
          <Route path="/vidEdit" element={user !== null ? user.user.role === 'admin' ? <VidoeEdit />:<Home/> : <Login />} />
          <Route path="/docEdit" element={user !== null ? user.user.role === 'admin' ? <UpdateDoc />: <Home/> :  <Login />} />
          <Route path="/introEdit" element={user !== null ? user.user.role === 'admin' ? <UpdateIntro />: <Home/> : <Login />} />
          <Route path="/indVideo" element={user !== null ? user.user.role === 'admin' ? <VidEditPage />: <Home/> :  <Login />} />
          <Route path="/indVidUpdate" element={user !== null ? user.user.role === 'admin' ? <UpdateVideo />: <Home/> :  <Login />} />
          <Route path="/editDoc" element={user !== null ? user.user.role === 'admin' ? <DocMainEdit />:  <Home/> : <Login />} />
          <Route path="/updateDoc" element={user !== null ? user.user.role === 'admin' ? <UpdateDoc />: <Home/> :  <Login />} />
          <Route path="/editQuiz" element={user !== null ? user.user.role === 'admin' ? <EditQuiz />: <Home/> :  <Login />} />
          <Route path="/editMid" element={user !== null ? user.user.role === 'admin' ? <EditMid />: <Home/> :  <Login />} />
          <Route path="/editFinal" element={user !== null ? user.user.role === 'admin' ? <EditFinal />: <Home/> :  <Login />} />
          <Route path="/editCourse" element={user !== null ? user.user.role === 'admin' ? <EditCourse />: <Home/> :  <Login />} />
          <Route path="/addCourse" element={user !== null ? user.user.role === 'admin' ? <AddCourse />: <Home/> :  <Login />} />
          <Route path="/addStudent" element={user !== null ? user.user.role === 'admin' ? <AddStudent />: <Home/> :  <Login />} />
          <Route path="/mainCourse" element={user !== null ? <MainCourse />:  <Login />} />
        {/* </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default RoutesPage;
