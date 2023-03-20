import React from "react";
import SidebarEl from "../SidebarEl";
import Header from "../Pages/Header";
// import video_one from "./The Missing Account Book.mp4";
import video_Two from "./video.mp4";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player";
import imageOne from "../student.png";
import "../../node_modules/video-react/dist/video-react.css";
import video_four  from './Rising Shaolin The Protector 2023.avi'

import { Player } from 'video-react';



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
                <div className="player-wrapper">
                <Player
      playsInline
      poster={imageOne}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
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
