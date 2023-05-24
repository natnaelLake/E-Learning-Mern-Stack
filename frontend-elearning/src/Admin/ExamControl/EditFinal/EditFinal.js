import React from 'react'
import { Tabs,Tab,Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import Header from '../../../Pages/Header'
import Sidebar from '../../Sidebar'
import AddFinal from './AddFinal'
import DeleteFinal from './DeleteFinal'
import UpdateFinal from './UpdateFinal'
import { useNavigate } from 'react-router-dom'



function EditFinal() {
  const navigate = useNavigate()
  const handleExams = ()=>{
    navigate('/exams')
  }
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
      <Button className ='align-items-left ml-5' onClick = {handleExams}style = {{float:'left',width:'7rem',marginLeft:'5px'}}> <Icon.ArrowLeftCircle /> Back</Button>
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
              <Tabs defaultActiveKey="Add" className="mb-3" fill >
                <Tab eventKey="Add" title='Add' bg = 'dark'><AddFinal /></Tab>
                <Tab eventKey="Update" title = 'Update'><UpdateFinal /></Tab>
                <Tab eventKey="Delete" title = 'Delete'><DeleteFinal /></Tab>
              </Tabs>
              <br /><br />
              <footer className="d-flex mx-auto py-4">
              <small className="mx-auto my-1 text-center">
                &copy; Natnael Lake , all my rights are reserved
              </small>
            </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFinal