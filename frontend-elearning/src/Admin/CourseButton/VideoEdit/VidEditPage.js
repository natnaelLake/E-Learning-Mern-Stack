import React from 'react'
import DeleteVideo from './DeleteVideo'
import UpdateVideo from './UpdateVideo'
import {Tabs,Tab,Button} from 'react-bootstrap'
import Sidebar from '../../Sidebar'
import Header from '../../../Pages/Header'
import * as Icon from 'react-bootstrap-icons'


function VidEditPage() {
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
            <Button className ='align-items-left ml-5' href = '/vidEdit'style = {{float:'left',width:'7rem',marginLeft:'5px'}}> <Icon.ArrowLeftCircle /> Back</Button>

            <div style={{ height: "100%" }}>
              <div
                style={{
                  height: "calc(100% - 64px)",
                  padding: "20px 5%",
                  overflowY: "scroll",
                }}
              >
                <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
                    <Tabs defaultActiveKey='Update' className = 'm-5' fill>
                        <Tab eventKey='Update' title = 'Update '><UpdateVideo /></Tab>
                        <Tab eventKey='Delete' title ='Delete'><DeleteVideo /></Tab>
                    </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default VidEditPage