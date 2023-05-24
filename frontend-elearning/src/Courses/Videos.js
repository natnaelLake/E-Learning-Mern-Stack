import React from "react";
import SidebarEl from "../SidebarEl";
import Header from "../Pages/Header";
import video_Two from "../Assets/video.mp4";
import imageOne from "../Assets/student.png";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import { useLocation } from "react-router-dom";

function Videos() {
  const location = useLocation();
  const videoFiles = location.state.video;
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
                <div className="player-wrapper">
                  <Player
                    playsInline
                    poster={imageOne}
                    autoPlay={true}
                    src={`https://e-learning-web-app-back-end.onrender.com/uploads/${videoFiles}`}
                  />
                </div>
                <br />
                <br />
                <div className="ratio ratio-16x9">
                  <iframe
                    src={video_Two}
                    title="YouTube video"
                    allowfullscreen
                    loop
                    autoPlay
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
