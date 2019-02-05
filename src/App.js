import React, { Component } from "react";
import { Link, Route, withRouter} from 'react-router-dom';

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
      <Route exact path='/' component={ConditionalView} />
      <Route path = '/BookList' component={BookList} />
 
      </Container>
    );
  }
}

const ConditionalView = Authenticate(BookList)(LoginPage);


export default withRouter(App);
