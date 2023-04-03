import React from "react";
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
// import './style.css'
import EditAss from "./AssButton/EditAss";


function ManageAssesment() {
  const navigate = useNavigate()
  const { getStudents ,deleteStudent,updateStudent} = useStudents();
  
  const handleDelete =  async (id)=>{
    console.log(id)
    await deleteStudent(id);
  }
  const handleUpdate = async (idnum)=>{
    // console.log(id)
    navigate('/edit',{state:{stud:idnum}})
    // await deleteStudent(id)
  }

  useEffect(()=>{
    const manageCrs = async ()=>{
      
      await getStudents();
    }
    manageCrs();
  },[])
  const { studentList } = useStudentContext();
  console.log('manage course stud list',studentList)
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
        <Button
          className="align-items-left ml-5"
          href="/"
          style={{ float: "left", width: "7rem", marginLeft: "5px" }}
        >
          {" "}
          <Icon.ArrowLeftCircle /> Back
        </Button>

        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
              {console.log('inside manage ass',studentList,'first name')}
              {studentList &&
                  <Table striped bordered hover>
              <thead>
              <tr>
                <th>Student Name</th>
                <th>Quize Result</th>
                <th>Mid Exam Result</th>
                <th>Final Exam Result</th>
                <th>Total Result</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                {studentList.map((student)=>(
                    
                      <tr key = {student._id}>
                        <td>
                          {student.firstname}&nbsp;&nbsp;{student.lastname}
                        </td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                        <td>100</td>
                        <td>
                        <Button bg="danger"  onClick={ ()=>{
                          // await deleteStudent(student._id)
                          handleUpdate(student)
                          console.log(student._id)
                        }}  >
                            <Icon.Pen /> Edit
                          </Button>
                        </td>
                      </tr>
                    // {}
                 ))}
                 </tbody>
                 </Table>
                 }

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
