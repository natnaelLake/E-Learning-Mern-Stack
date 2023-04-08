import { useStudentContext } from "../../hooks/useStudentContext";
import axios from "axios";
import { useState } from "react";
// import EditAss from '../AssButton/EditAss'
import { useAuthContext } from "../../hooks/useAuthContext";

export const useStudents = () => {
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [deptError, setDeptError] = useState("");
  const [quizError, setQuizError] = useState("");
  const [midError, setMidError] = useState("");
  const [finalError, setFinalError] = useState("");
  const [error, setError] = useState(false);
  const [userAuthError, setUserAuthError] = useState("");

  const { dispatch, studentList } = useStudentContext();
  const { user } = useAuthContext();
  // console.log(studentList)
  const getStudents = async () => {
    if (!user) {
      setUserAuthError("You must be logged in first.");
      return;
    }
    const allStudents = await axios.get("http://localhost:8000/getStudents");
    // console.log(allStudents)
    if (allStudents.status === 200) {
      // setGetData(allStudents)
      localStorage.setItem(
        "allStudent",
        JSON.stringify(allStudents.data.students)
      );
      // localStorage.setItem("countStud", JSON.stringify(allStudents.data.countListStud));
      dispatch({ type: "GET_STUDENT", payload: allStudents.data.students });
      // dispatch({type:'COUNT_STUDENT',payload:allStudents.data.countListStud})
    }
    console.log("stud list is: ", studentList);
  };
  const updateStudent = async (student, studId) => {
    try {
      const updatedStudent = await axios.patch(
        "http://localhost:8000/updateStudents/" + studId,
        student
      );
      // console.log(updatedStudent)
      if (updatedStudent.status === 200) {
        // console.log('.... updated one is :',updatedStudent.data)
        localStorage.setItem("updated", JSON.stringify(updatedStudent.data));
        // dispatch({type:'UPDATE_STUDENT',payload:updatedStudent})
      }
    } catch (error) {
      console.log(error.response.data);
      setQuizError(error.response.data.quiz);
      setMidError(error.response.data.mid);
      setFinalError(error.response.data.final);
      setError(true);
    }
  };
  console.log(" ..... ...  ..", error);

  const deleteStudent = async (id) => {
    const deletedStudent = await axios.delete(
      "http://localhost:8000/deleteStudents/" + id
    );
    // console.log('deletedStud is :',id)
    if (deletedStudent.status === 200) {
      dispatch({ type: "DELETE_STUDENT", payload: deletedStudent });
    }
  };
  const addStudents = async (
    studentname,
    email,
    password,
    age,
    department,
    phone,
    quiz,
    mid,
    final
  ) => {
    const studentData = {
      studentname,
      email,
      password,
      age,
      department,
      phone,
      quiz,
      mid,
      final,
    };
    // console.log('before add :',studentData)
    const addedStudent = await fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify({
        studentname,
        email,
        password,
        age,
        department,
        phone,
        quiz,
        mid,
        final,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let jsonRes = await addedStudent.json();
    console.log(addedStudent);
    if (addedStudent.ok) {
      dispatch({ type: "ADD_STUDENT", payload: jsonRes });
    } else {
      console.log("dsfjkj dsfdfjkjf fddkj", jsonRes);
      setNameError(jsonRes.errors.studentname);
      setEmailError(jsonRes.errors.email);
      setPasswordError(jsonRes.errors.password);
      setPhoneError(jsonRes.errors.phone);
      setQuizError(jsonRes.errors.quiz);
      setMidError(jsonRes.errors.mid);
      setDeptError(jsonRes.errors.department);
      setFinalError(jsonRes.errors.final);
    }
    // console.log(jsonRes.errors.studentname)

    // console.log(nameError)
  };
  return {
    getStudents,
    updateStudent,
    deleteStudent,
    addStudents,
    nameError,
    emailError,
    passwordError,
    phoneError,
    quizError,
    midError,
    finalError,
    deptError,
    error,
  };
};
