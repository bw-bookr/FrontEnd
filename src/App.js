import React, { Component } from "react";

import BookList from "./Components/BookList";

import styled from "styled-components";

import Authenticate from "./Components/Authenticate";
import LoginPage from './Components/Login';

const Container = styled.div`
  text-align: center;
`;

class App extends Component {




  render() {
    return (
      <Container>
      
        <ConditionalView />
      </Container>
    );
  }
}

const ConditionalView = Authenticate(BookList)(LoginPage);


export default App;
