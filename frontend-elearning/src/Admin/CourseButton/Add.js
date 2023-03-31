import { React, useState } from "react";
import { Form, Card,Button } from "react-bootstrap";



function Add() {
  const [validated, setValidated] = useState(false);
  const [courseTitle,setCourseTitle] = useState('')
  const [moduleTitle,setModuleTitle] = useState('')
  const [modules,setModules] = useState({})
  const [videoTitle,setVideoTitle] = useState('')
  const [fileTitle,setFileTitle] = useState('')
  const [coverImage,setCoverImage] = useState('')
  const [courseFiles,setCourseFiles] = useState([{}])
  const [courseVideos,setCourseVideos] = useState([{}])
  const [descTitle,setDescTitle] = useState('')
  const [videos,setVideos] = useState([])
  const [file,setFiles] = useState([])
  const [description,setDescription] = useState({})
  const [desc,setDesc] = useState({})
  const [allFiles,setAllFiles] = useState({})

  const handleSubmit = async (event) => {

    setCourseFiles([{file,fileTitle}])
    setCourseVideos([{videoTitle,videos}])
    setDescription({desc,descTitle})
    setAllFiles({courseFiles,courseVideos})
    
    event.preventDefault();
    const formData = new FormData();
    formData.append('file',allFiles)
    // formData.append('video',courseVideos)
    setModules({moduleTitle,formData})
    console.log(modules)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // setModule({description,formData})
    console.log(formData)
    const response = await fetch('http://localhost:8000/addVideos',{
      method:'POST',
      body:JSON.stringify({courseTitle,moduleTitle,coverImage,description,modules}),
      headers:{'Contentt-Type':'multipart/form-data'}
    })
    const jsonRes = await response.json()
    console.log(jsonRes)
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
                  id="course"
                  placeholder="Course Name"
                  required
                  onChange = {(e)=>{setCourseTitle(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Course Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Course Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Select Cover Image</Form.Label>
                <Form.Control
                  type="file"
                  id="quiz"
                  placeholder="Enter Quiz Result"
                  onChange = {e => {setCoverImage(e.target.files)} }
                  controlid="validationCustom03"
                />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="session"
                  placeholder="Session Name"
                  onChange = {e =>{setModuleTitle(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Session Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Session Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="course"
                  placeholder="Course Name"
                  required
                  onChange = {e=>{setVideoTitle(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Video Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Course Video Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Select Multiple Course Videos</Form.Label>
                <Form.Control
                  type="file"
                  id="quiz"
                  placeholder="Enter Quiz Result"
                  controlid="validationCustom03"
                  onChange = {e =>{setVideos(e.target.files)}}
                  multiple
                />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="course"
                  placeholder="Course Name"
                  required
                  onChange = {e=>{setFileTitle(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Course File Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Course File Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Select Multiple Course Documents</Form.Label>
                <Form.Control
                  type="file"
                  id="quiz"
                  placeholder="Enter Quiz Result"
                  onChange = {e => {setFiles(e.target.files)} }
                  controlid="validationCustom03"
                  multiple
                />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="course"
                  placeholder="Course Name"
                  required
                  onChange = {e=>{setDescTitle(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Description Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Description Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as = "textarea"
                  rows = {4}
                  id="session"
                  placeholder="Session Name"
                  onChange = {e =>{setDesc(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Introduction</label>
              </Form.Floating>
            </Form.Group>
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