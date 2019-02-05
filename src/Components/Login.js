import React, { Component } from "react";


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

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #ffcb05;
//   color: #ffcb05;
//   margin: 1em;
//   padding: 0.25em 1em;
// `
// const Form = styled.form`
//     width: 500px;
//     background:  #00274c;
//     color: #ffcb05;
//     border-radius: 6px;
//     margin: 10px auto;
//     padding: 10px 25px;
// `

// const Input = styled.input`
//     width: 170px;
//     border-radius: 6px;
//     margin: 10px;
//     padding: 10px 25px;
// `

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    console.log("input change");
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    console.log("Got to handler:  ", this.state.username);
    const user = this.state.username;
    localStorage.setItem("user", user);
  };

  render() {
    return (
      //     <Form >
      //         <h2> Please Login to Continue: </h2>

      //         <Input
      //             type="text"
      //             placeholder="User Name"
      //             name="username"
      //             value={this.state.username}
      //             onChange={this.handleInputChange}
      //         />

      //         <Input
      //             type="password"
      //             placeholder="Password"
      //             name="password"
      //             value={this.state.password}
      //             onChange={this.handleInputChange}
      //         />
      //         <br />
      //         <Button onClick={this.handleLogin}>
      //             Log In
      //   </Button>

      //     </Form>
      <>
        <Navbar
          id="nav"
          className="navbar navbar-expand-lg fixed-top navbar-light nav-lg"
        >
          <Container>
            <NavbarBrand href="/">Bookr</NavbarBrand>
          </Container>
        </Navbar>
        <Row className="cover row container-fluid p-0 m-0">
          <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-12 align-self-center cover-text text-center px-5 animated fadeIn">
            <a href="https://bookr-site.netlify.com/">
              <i className="fas fa-chevron-left" /> Back
            </a>
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
      </>
    );
  }
}

export default Login;
