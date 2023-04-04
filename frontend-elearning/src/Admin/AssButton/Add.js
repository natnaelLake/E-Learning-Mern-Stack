import { React, useState } from "react";
import { Form, Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../adminHooks/useStudents";


 function Add() {
  const [validated, setValidated] = useState(false);
  const [firstname,setFirstname]  = useState('');
  const [lastname,setLastname]  = useState('');
  const [quiz,setQuiz] = useState('')
  const [mid,setMid] = useState('')
  const [final,setFinal] = useState('')
  const navigate = useNavigate();
  // const [total,setTotal] = useState(null)
  const {addStudents} = useStudents();

  

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    await addStudents(firstname,lastname,quiz,mid,final)
    navigate(-1)
  };
  return (
    <div className="d-flex align-items-center justify-content-center firstDiv">
      <Card
        bg="white"
        className="text-center  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
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
                  value = {firstname}
                  onChange={(e)=>{setFirstname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">First Name</label>
                <Form.Control.Feedback type="invalid">
                  Please provide First Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="student"
                  placeholder="Student Name"
                  value = {lastname}
                  onChange={(e)=>{setLastname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Lat Name</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Last Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            {/* <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="student"
                  placeholder="Student Name"
                  value = {studentname}
                  onChange={(e)=>{setStudentname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Student Name</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Student Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br /> */}
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="quiz"
                  placeholder="Enter Quiz Result"
                  value = {quiz}
                  onChange={(e)=>{setQuiz(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="quiz">Enter Quiz Result</label>
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
                  placeholder="Enter Mid Result"
                  value = {mid}
                  onChange={(e)=>{setMid(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="mid">Enter Mid Result</label>
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
                  placeholder="Enter Final Result"
                  value = {final}
                  onChange={(e)=>{setFinal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="final">Enter Final Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Final.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            {/* <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="total"
                  placeholder="Enter Total Result"
                  value = {total}
                  onChange={(e)=>{setTotal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="total">Enter Total Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Total.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group> */}
            
            <br />
            <Button
              variant="danger"
              type="submit"
              className="text-uppercase "
            >
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Add;
