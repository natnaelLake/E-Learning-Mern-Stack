import React from 'react'
import { Container, Card, Button, Row, Col, Image, Offcanvas, Modal,Pagination } from "react-bootstrap";
import "./style.css";
import * as Icon from "react-bootstrap-icons";



function CourseCards({courses}) {
  return (
    <div>
          {
          courses && <div class="row row-cols-1 row-cols-md-3 g-4">
            {courses.map((files) => (
              <div className="col">
                <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                  <div className="imageCard">
                    <Card.Img
                      variant="top"
                      src={`http://localhost:8000/uploads/${files.coverImage}`}
                      className="rounded-5 mainCard"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{files.courseTitle}</Card.Title>
                    <Card.Text>{files.desc}</Card.Text>
                    <Button
                      href="/editCourse"
                      variant="outline-danger"
                      className=""
                    >
                      <Icon.Pen /> Edit
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">3 min ago</small>
                  </Card.Footer>
                </Card>
              </div>
            ))

            }
          </div>
        }
    </div>
  )
}

export default CourseCards