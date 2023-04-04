import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Pages/Header";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useStudentContext } from "../hooks/useStudentContext";
import { useStudents } from "./adminHooks/useStudents";
import { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Add from "./AssButton/Add";
import Update from "./AssButton/Update";
import Delete from "./AssButton/Delete";
import "./style.css";
import EditAss from "./AssButton/EditAss";

function ManageAssesment() {
  const navigate = useNavigate();
  const { getStudents, deleteStudent, updateStudent } = useStudents();
  const { studentList, dispatch } = useStudentContext();
  const locData = JSON.parse(localStorage.getItem('allStudent'))
  const [studentData, setStudentData] = useState(studentList);
  const [blurcontrol,setControl] = useState(true)
  const [changecontrol,setChangeControl] = useState(true)

  console.log("....topLis", studentList);
  const handleDelete = async (stud) => {
    navigate('/edit',{state:{student:stud}})
  };
  const handleUpdate = async (student, idnum) => {
    // console.log(id)
    // navigate("/edit", { state: { stud: idnum } });
    console.log("...... id ", idnum);
    
    // setStudentData(studentList)
    await updateStudent(student, idnum);
    await getStudents();
    setChangeControl(true)
    // dispatch({payload:studentData})
    // await deleteStudent(id)
  };
const addButtonHandle = async ()=>{
  navigate('/addStudent')
}
  useEffect(() => {
    const manageCrs = async () => {
      setStudentData(studentList)
      await getStudents();
    };
    manageCrs();
  }, []);
  const onChange = (e, studentId) => {
    const { name, value } = e.target;

    const editData = studentList.map((item) =>
      item._id === studentId && name ? { ...item, [name]: value } : item
    );

    setStudentData(editData);
    setChangeControl(false)
  };
  console.log("manage course stud list", studentList);
  return (
    <div className="d-flex profile">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Header className="p-5"></Header>
        <div>
            <Button
              className="align-items-left ml-5"
              href="/"
              style={{ float: "left", width: "7rem", marginLeft: "5px" }}
            >
              {" "}
              <Icon.ArrowLeftCircle /> Back
            </Button>
            <Button
              className="align-items-left ml-5"
              onClick={addButtonHandle}
              style={{ float: "left", width: "10rem", marginLeft: "5px" }}
              variant="success"
            >
              {" "}
              <Icon.PlusCircleFill /> Add Student
            </Button>
          </div>

        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
              {console.log("inside manage ass", studentList, "first name")}
              {!changecontrol ? studentList &&  (
                <Table striped bordered hover>
                  <thead style={{color:'white',backgroundColor:'black'}}>
                    <tr>
                      <th>Student Name</th>
                      <th>Quiz Result</th>
                      <th>Mid Exam Result</th>
                      <th>Final Exam Result</th>
                      <th style={{width : '15rem'}}>Total Result</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((student) => (
                      <tr key={student._id}>
                        <td>
                        <input
                            name="firstname"
                            value={student.firstname }
                            type="text"
                            className="text-capitalize"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Student Name"
                          />
                          {/* {student.firstname}&nbsp;&nbsp;{student.lastname} */}
                        </td>
                        <td>
                          <input
                            name="quiz"
                            value={student.quiz}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Type Quiz"
                          />
                        </td>
                        <td><input
                            name="mid"
                            value={student.mid}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Enter Mid"
                          /></td>
                        <td><input
                            name="final"
                            value={student.final}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Enter Final"
                          /></td>
                        <td style={{padding:'18px',fontFamily :'san-ferif',fontSize:'19px',}}>{student.total}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              // await deleteStudent(student._id)
                              handleDelete(student);
                              console.log(student._id);
                            }}
                          >
                            <Icon.Trash />
                          </Button>
                        </td>
                      </tr>
                      // {}
                    ))}
                  </tbody>
                </Table>
                
              ):studentList &&  (
                <Table striped bordered hover>
                  <thead variant = 'primary' style={{color:'white',backgroundColor:'black'}}>
                    <tr>
                      <th>Student Name</th>
                      <th>Quiz Result</th>
                      <th>Mid Exam Result</th>
                      <th>Final Exam Result</th>
                      <th style={{width : '10rem'}}>Total Result</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentList.map((student) => (
                      <tr key={student._id}>
                        <td>
                        <input
                            name="firstname"
                            value={student.firstname }
                            type="text"
                            className="text-capitalize"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Student Name"
                          />
                          {/* {student.firstname}&nbsp;&nbsp;{student.lastname} */}
                        </td>
                        <td>
                          <input
                            name="quiz"
                            value={student.quiz}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Type Quiz"
                          />
                        </td>
                        <td><input
                            name="mid"
                            value={student.mid}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Enter Mid"
                          /></td>
                        <td><input
                            name="final"
                            value={student.final}
                            type="number"
                            onChange={(e) => onChange(e, student._id)}
                            onBlur={(e) => {
                              // const { name, value } = e.target;
                              // const studentUpd = { [name]: value };
                              handleUpdate(student, student._id);
                            }}
                            placeholder="Enter Final"
                          /></td>
                        <td style={{padding:'18px',fontFamily :'san-ferif',fontSize:'19px',}}>{student.total}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              // await deleteStudent(student._id)
                              handleDelete(student);
                              console.log(student._id);
                            }}
                          >
                            <Icon.Trash /> 
                          </Button>
                        </td>
                      </tr>
                      // {}
                    ))}
                  </tbody>
                </Table>
              )}

              <br />
              <footer className="d-flex mx-auto py-4">
                <small className="mx-auto my-1 text-center">
                  &copy; Natnael Lake , all my rights are reserved
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAssesment;
