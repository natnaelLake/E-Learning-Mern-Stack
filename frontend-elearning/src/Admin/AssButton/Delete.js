import {React,useState} from 'react'
import {Form,Card,Button,Modal} from 'react-bootstrap'
import { useStudents } from '../adminHooks/useStudents'
import { useStudentContext } from '../../hooks/useStudentContext'
import {useFileContext} from '../../hooks/useFileContext'
import { useNavigate } from 'react-router-dom'

function Delete({student}) {
    const [show ,setShow] = useState(false)
    const {deleteStudent} = useStudents();
    const { studentList } = useStudentContext();
    const {fileList} = useFileContext()
    const navigate = useNavigate();



    console.log('delete student list',student)
    const handleModal = ()=>{
        setShow(true)
    }
    const handleClose = ()=> setShow(false)
    const handleDelete = async ()=>{
      // e.preventDefault();
      console.log('student id: ',student._id)
      await deleteStudent(student._id);
      navigate('/assessment')
    }
    // console.log(studentList,fileList)
  return (
    <div className="d-flex align-items-cUpdate justify-content-center Update firstDiv">
      <Card
        bg="white"
        className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ width: "400px" }}
      >
        {/* <hr /> */}
        <Card.Body>
          <Form >
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="student"
                  placeholder="Student Name"
                  required
                  controlid="validationCustom03"
                  disabled
                />
                <label htmlFor="student">{student.firstname}&nbsp;&nbsp;{student.lastname}</label>
              </Form.Floating>
            </Form.Group>
            <br />
            
          </Form>
          <Button
              variant="danger"
              // type="submit"
              className="text-uppercase "
              onClick = {handleModal}
            >
              Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-capitalize">
              {`Do you want to delete ${student.firstname} ${student.lastname}?`}
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" onClick={handleDelete} variant="danger">
                Yes
              </Button>
              <Button variant="primary" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Delete