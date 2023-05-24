import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Pages/Header";
import SidebarEl from "../SidebarEl";
// import { Logger } from "logging-library";
// import FileViewer from "react-file-viewer";
// import { CustomErrorComponent } from "custom-error";
import { Button } from "react-bootstrap";

function Files() {
  const location = useLocation();
  const docFile = location.state.file;

  // const onButtonClick = () => {
  //   fetch(`http://localhost:8000/uploads/${docFile}`).then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);

  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = `http://localhost:8000/uploads/${docFile}`;
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <div>
      <div>
        <div className="d-flex profile">
          <div>
            <SidebarEl />
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
            <div style={{ height: "100%" }}>
              <div
                style={{
                  height: "calc(100% - 64px)",
                  padding: "20px 5%",
                  overflowY: "scroll",
                }}
              >
                <div className="align-items-center container">
                  <h1>Click the button to View a file</h1>
                  <Button>
                    <Link
                      to={`https://e-learning-web-app-back-end.onrender.com/uploads/${docFile}`}
                      target="_blank"
                      download
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      View File
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Files;
