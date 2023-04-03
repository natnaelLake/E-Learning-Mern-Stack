import {React,useEffect} from 'react'
import Sidebar from '../Sidebar'
import Header from '../../Pages/Header'
import { Button,Row,Col,Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import imageOne from '../../Assets/student.png'
import {useFileContext} from '../../hooks/useFileContext'
import { useFiles } from '../adminHooks/useFiles'


function UpdateDoc() {
  const {fileList} = useFileContext();
  const {getCourse} = useFiles();
  useEffect(()=>{
    const updateMgt = async ()=>{
      await getCourse();
    }
    updateMgt();
  },[])
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
      <Button className ='align-items-left ml-5' href = '/editCourse'style = {{float:'left',width:'7rem',marginLeft:'5px'}}> <Icon.ArrowLeftCircle /> Back</Button>
      <div style={{ height: "100%" }}>
        <div
          style={{
            height: "calc(100% - 64px)",
            padding: "20px 5%",
            overflowY: "scroll",
          }}
        >
          <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
          {
                  fileList && <div class="row row-cols-1 row-cols-md-3 g-4">
                 { fileList.map((files)=>{
                  <div class="col">
                  <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                  <div className="imageCard">
                      <Card.Img
                        variant="top"
                        src={imageOne}
                        className="rounded-5 mainCard"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{files.title}</Card.Title>
                      <Card.Text>{files.desc}</Card.Text>
                      <Button
                        href="/indVideo"
                        variant="outline-danger"
                        className=""
                      >
                        <Icon.Pen /> Edit
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">updated 3min ago</small>
                    </Card.Footer>
                  </Card>
                  </div>
                 })
                    }
                </div>
                }
            <Row id="welcome">
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button
                      href="/editDoc"
                      variant="outline-danger"
                      className=""
                    >
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button href="/editDoc" variant="outline-danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button href="/editDoc" variant="outline-danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button href="/editDoc" variant="outline-danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button href="/editDoc" variant="outline-danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={imageOne}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Button href="/editDoc" variant="outline-danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateDoc