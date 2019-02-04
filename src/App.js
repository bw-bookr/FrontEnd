import React, { Component } from "react";

import BookList from "./Components/BookList";

import styled from "styled-components";

import Authenticate from "./Components/Authenticate";
import LoginPage from './Components/Login';

const Container = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }



  render() {
    return (
      <Container>
        <h1>Master Book List </h1>
        <ConditionalView />
      </Container>
    );
  }
}

const ConditionalView = Authenticate(BookList)(LoginPage);


export default App;
