import { React, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useStudents } from "../adminHooks/useStudents";

function Update(student) {
  const [validated, setValidated] = useState(false);
  const [upstudentname, setUpstudentname] = useState();
  const [updateQuiz, setUpdateQuiz] = useState();
  const [upMid, setUpMid] = useState();
  const [upFinal, setUpFinal] = useState();
  const [upTotal, setUpTotal] = useState();
  const { updateStudent } = useStudents();
  // const changeUpd = JSON.parse(localStorage.getItem('allStudent'))
  // let studVal;
  // changeUpd.map((stud)=>{
  //   if(stud._id === student.student._id){
  //     studVal = stud;
  //   }
  // })

  const [studentData, setStudentData] = useState(student);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    await updateStudent(studentData);
  };
  const handleChange = (e, studentId) => {
    const { name, value } = e.target;
    // console.log(' fdjksadlfj fdsfjkdkl ',{...student})
    // student.name =
    // const {firstname,quiz,mid,final} = student
    const editData =
      student._id === studentId && name
        ? { ...student.student, [name]: value }
        : student.student;
    // console.log(editData)
    localStorage.setItem("changeUser", JSON.stringify(editData));
    const fetchedChange = JSON.parse(localStorage.getItem("changeUser"));
    console.log(".../fetch", fetchedChange);
    setStudentData(editData);
  };
  console.log(studentData);
  return (
    <div>
      <div className="d-flex align-items-cUpdate justify-content-cUpdate firstDiv">
        <Card
          bg="white"
          className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
          style={{ width: "400px" }}
        >
          {/* <hr /> */}
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Floating>
                  <Form.Control
                    type="text"
                    id="student"
                    placeholder="Student Name"
                    value={studentData.firstname}
                    name="firstname"
                    onChange={(e) => {
                      handleChange(e, student._id);
                    }}
                    required
                    controlid="validationCustom03"
                  />
                  <label htmlFor="student">Student Name</label>
                  <Form.Control.Feedback type="invalid">
                    Please provide Student Name
                  </Form.Control.Feedback>
                </Form.Floating>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Floating>
                  <Form.Control
                    required
                    type="number"
                    id="quiz"
                    placeholder="Update Quiz Result"
                    value={studentData.quiz}
                    name="quiz"
                    onChange={(e) => {
                      handleChange(e, student._id);
                    }}
                    controlid="validationCustom03"
                  />
                  <label htmlFor="quiz">Update Quiz Result</label>
                  <Form.Control.Feedback type="invalid" className="text-danger">
                    Please provide a valid Quiz.
                  </Form.Control.Feedback>
                </Form.Floating>{" "}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Floating>
                  <Form.Control
                    required
                    type="number"
                    id="mid"
                    placeholder="Update Mid Result"
                    value={studentData.mid}
                    name="mid"
                    onChange={(e) => {
                      handleChange(e, student._id);
                    }}
                    controlid="validationCustom03"
                  />
                  <label htmlFor="mid">Update Mid Result</label>
                  <Form.Control.Feedback type="invalid" className="text-danger">
                    Please provide a valid Mid.
                  </Form.Control.Feedback>
                </Form.Floating>{" "}
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Floating>
                  <Form.Control
                    required
                    type="number"
                    id="final"
                    name="final"
                    placeholder="Update Final Result"
                    value={studentData.final}
                    onChange={(e) => {
                      handleChange(e, student._id);
                    }}
                    controlid="validationCustom03"
                  />
                  <label htmlFor="final">Update Final Result</label>
                  <Form.Control.Feedback type="invalid" className="text-danger">
                    Please provide a valid Final.
                  </Form.Control.Feedback>
                </Form.Floating>{" "}
              </Form.Group>
              <br />
              {/* <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="total"
                  placeholder="Update Total Result"
                  value = {upTotal}
                  onChange = {(e)=>{setUpTotal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="total">Update Total Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Total.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            
            <br /> */}
              <Button
                variant="danger"
                type="submit"
                className="text-uppercase "
              >
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Update;
