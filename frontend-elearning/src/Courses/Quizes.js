import React from 'react'
import Header from '../Pages/Header'
import SidebarEl from '../SidebarEl'


function Quizes() {
  return (
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
        <Header className = 'p-5'></Header>
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            Quizes
          </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Quizes