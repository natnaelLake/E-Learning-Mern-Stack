import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Pages/Courses";
import Videos from "./Courses/Videos";
import Files from "./Courses/Files";
import Login from "./AuthPage/Login";
import SignUp from "./AuthPage/SignUp";
import Introduction from "./Courses/Introduction";
import Quizes from "./Courses/Quizes";
import Dashboard from "./Admin/Dashboard";
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

function RoutesPage() {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/courses"
            element={<Courses />}
          />
          <Route path="/videos" element={<Videos />} />
          <Route path="/files" element={<Files />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/quizes" element={<Quizes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessment" element={<ManageAssesment />} />
          <Route path="/mntcourse" element={<ManageCourse />} />
          <Route path="/exams" element={<ManageExams />} />
          <Route path="/students" element={<ManageStudents />} />
          <Route path="/edit" element={<EditAss />} />
          <Route path="/vidEdit" element={<VidoeEdit />} />
          <Route path="/docEdit" element={<UpdateDoc />} />
          <Route path="/introEdit" element={<UpdateIntro />} />
          <Route path="/indVideo" element={<VidEditPage />} />
          <Route path="/indVidUpdate" element={<UpdateVideo />} />
          <Route path="/editDoc" element={<DocMainEdit />} />
          <Route path="/updateDoc" element={<UpdateDoc />} />
          <Route path="/editQuiz" element={<EditQuiz />} />
          <Route path="/editMid" element={<EditMid />} />
          <Route path="/editFinal" element={<EditFinal />} />
          <Route path="/editCourse" element={<EditCourse />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default RoutesPage;
