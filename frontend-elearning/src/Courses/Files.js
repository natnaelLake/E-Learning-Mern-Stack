import React from 'react'
import Header from '../Pages/Header'
import SidebarEl from '../SidebarEl'


function Files() {
  const onButtonClick = () => {
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
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
        <Header className = 'p-5'></Header>
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
             <div className='align-items-center container'>
                <h3>Click on below button to download PDF file</h3>
                <button onClick={onButtonClick}>
                <i className="fas fa-download"/>
                    Download
                </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Files