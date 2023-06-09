import React, { useState } from "react";
import { Button, Form, Image, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useFiles } from "../Admin/adminHooks/useFiles";
import imageOne from "../Assets/constimage.jpeg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./style.css";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [search, setSearch] = useState("");
  const { getCourseSearch } = useFiles();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
  };
  const handleMainCourse = () => {
    navigate("/mainCourse");
  };
  const handleLogo = () => [navigate("/")];
  const handleLogin = () => {
    navigate("/login");
  };
  const hanldeDashBoard = ()=>{
    navigate("/dashboard")
  }
  const handleSearch = async (searchName) => {
    await getCourseSearch(searchName);
  };
  // console.log('header user ',user.user.role)
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="success"
        className="main-nav"
        variant="dark"
      >
        <Navbar.Brand onClick={handleLogo} className="me-auto">
          <Image src={imageOne} width="40" height="40" roundedCircle />
          &nbsp; E-Learning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-Navbar-nav" />
        <Navbar.Collapse id="responsive-Navbar-nav">
          <Nav className="m-auto">
            {user && (
              <Nav.Link onClick={handleLogo} className="my-Navbars text-light">
                Home
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                onClick={handleMainCourse}
                className="my-Navbars text-light"
              >
                Courses
              </Nav.Link>
            )}
            {user && user.user.role === "admin" ? (
              <Nav.Link  onClick = {hanldeDashBoard} className="my-Navbars text-light">
                DashBoard
              </Nav.Link>
            ) : null}
            {user && (
              <NavDropdown
                title="All Courses "
                variant="light"
                id="collasible-nav-dropdown"
                className="my-Navbars"
              >
                <NavDropdown.Item
                  onClick={handleMainCourse}
                  className="my-drops text-dark"
                >
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleLogo}
                  className="my-drops text-dark"
                >
                  Home
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav className="ml-auto">
            {user && (
              <span style={{ padding: "20px", color: "white" }}>
                {user.email}
              </span>
            )}
            <div
              style={{
                paddingTop: "18px",
                paddingRight: "20px",
                paddingBottom: "5px",
              }}
            >
              {user && (
                <Button onClick={handleLogout} variant="outline-primary">
                  Log Out
                </Button>
              )}
            </div>
          </Nav>
          <Nav className="ml-auto">
            {!user && (
              <Button
                onClick={handleLogin}
                variant="outline-primary"
                className="text-light me-4"
              >
                login
              </Button>
            )}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="outline-dark"
                onClick={() => {
                  handleSearch(search);
                }}
                className="text-light"
              >
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
