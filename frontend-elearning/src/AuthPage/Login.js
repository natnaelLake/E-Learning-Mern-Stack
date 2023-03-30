import {useState} from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";


function Login() {
  const [validated, setValidated] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {login,emailError,passError} = useLogin()
  const {user} = useAuthContext();
  const [authError,setAuthError] = useState();


  const handleSubmit = async (event) => {
    // if(user){
    //   if(user.email !== email){
    //     setAuthError('you must be register')
    //     return
    //   }
    // }else{
    //   setAuthError('you must be register')
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

      await login(email,password)

  };
  const style = { color: "white", width: "200px", height: "50px" };
  const style1 = { width: "200px", height: "50px" };

  return (
    <div className="d-flex align-items-center justify-content-center firstDiv">
      <Card
        bg="dark"
        className="text-center  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ height: "500px", width: "400px" }}
      >
        <p className="text-danger">{authError}</p>
        <Icon.PersonFill
          style={style}
          className="align-items-center mx-auto "
        />
        {/* <hr /> */}
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="User Name"
                  value={email}
                  onChange = {(e)=>{setEmail(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="email">User Name</label>
                <p className="text-danger">{emailError != 'Enter Valid Email' && emailError}</p>
                <Form.Control.Feedback type="invalid">
                 {emailError}
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="password"
                  id="email"
                  placeholder="Password"
                  value={password}
                  controlid="validationCustom03"
                  onChange = {(e)=>{setPassword(e.target.value)}}
                />
                <label htmlFor="email">Password</label>
                <p className="text-danger">{passError != 'Enter Password' && passError}</p>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  {passError}
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <div className="mb-3 text-light">
              <Form.Check
                inline
                label="Remember Me?"
                type="checkbox"
                id={"inline-radio-1"}
              />
            </div>
            <hr className="text-white" />
            <Card.Text className="text-center text-white">
              Create Account ?<Link to="/signup">Register </Link>
            </Card.Text>
            <br />
            <Button
              variant="primary"
              type="submit"
              style={style1}
              className="text-uppercase"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
