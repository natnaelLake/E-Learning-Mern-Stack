import React from "react";
import { Button, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Quiz() {
  return (
    <div>
      <div style={{ height: "100%" }}>
        <div
          style={{
            height: "calc(100% - 64px)",
            padding: "20px 5%",
            overflowY: "scroll",
          }}
        >
          <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>Semister</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2012</td>
                  <td>1</td>
                  <td>
                    <Button bg="danger" href="/editQuiz">
                      <Icon.Pen /> Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2013</td>
                  <td>2</td>
                  <td>
                    <Button bg="danger" href="/editQuiz">
                      <Icon.Pen /> Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2014</td>
                  <td>1</td>
                  <td>
                    <Button bg="danger" href="/editQuiz">
                      <Icon.Pen /> Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2015</td>
                  <td>2</td>
                  <td>
                    <Button href="/editQuiz" bg="danger">
                      <Icon.Pen /> Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
