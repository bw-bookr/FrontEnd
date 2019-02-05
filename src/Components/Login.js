import React, { Component } from "react";
import Axios from "axios";

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

const style = {
  height: "100vh"
};

//   const coverImg = {
//   background-image: 'url(https://images.unsplash.com/photo-1488381297039-d6ee94af777e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)',
//   background-size: 'cover',
//   background-position: 'center',
//   }
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
      const baseUrl="http://localhost:8000/api/user-access/login/"
    Axios
    .post(baseUrl, this.state)

      .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push('/BookList');
        
      })
      .catch(err => console.log(err));
    
   
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
        <Row style={style}>
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
