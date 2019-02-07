import React, { Component } from "react";
import Axios from 'axios';

import './Login.css';

import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Navbar,
  NavbarBrand
} from "reactstrap";

import { FormControl } from "react-bootstrap";


const style = {
  height: "100vh"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    console.log("Props available: ", this.props);
    const baseUrl = "https://bookr-app-backend.herokuapp.com/api/user-access/login";
    Axios.post(baseUrl, this.state)

      .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
  
      <>
      <div className="container-fluid">
        <Navbar
          id="nav"
          className="navbar navbar-expand-lg fixed-top navbar-light nav-lg"
        >
          <Container>
            <NavbarBrand href="https://bookrmarketing1.netlify.com/">Bookr</NavbarBrand>
          </Container>
        </Navbar>
        <Row style={style}>
          <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-12 align-self-center cover-text text-center px-5 animated fadeIn">
        <a href='https://bookrmarketing1.netlify.com/' ><i class="fas fa-chevron-left"></i> Back</a>
            <h1>Login to Bookr</h1>
            <Form action="">
              <InputGroup className="input-group mb-3 input-group-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="basic-addon1">
                    <i className="far fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <FormControl
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="input-group mb-3 input-group-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="basic-addon1">
                    <i className="fas fa-key" />
                  </InputGroupText>
                </InputGroupAddon>
                <FormControl
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button color="primary" size="lg" onClick={this.handleLogin}>
                Submit{" "}
              </Button>
            </Form>
          </Col>
          <Col className="col-xl-8 col-lg-7 col-md-6 col-sm-12 cover-img" />
        </Row>
        </div>
      </>
    );
  }
}

export default Login;
