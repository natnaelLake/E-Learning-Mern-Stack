import React from "react";
import SidebarEl from "../SidebarEl";
import Header from "../Pages/Header";
// import video_one from "./The Missing Account Book.mp4";
import video_Two from "./video.mp4";
import ReactPlayer from "react-player";
import video_Three from 'https://player.vimeo.com/video/137857207'


function Videos() {
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
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="embedsPage"
                    className="embed-responsive-item"
                    src={video_Two}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
