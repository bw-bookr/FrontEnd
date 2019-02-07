import React, { Component } from "react";
import {  Route, withRouter} from 'react-router-dom';

import BookList from "./Components/BookList";
import SingleBook from "./Components/SingleBook";

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
      <Route exact path='/' component={Authenticate} />
      <Route exact path = '/BookList' component={BookList} />
      <Route path = '/LoginPage' component={LoginPage} />
      <Route path = '/BookList/book/:id' render={props => <SingleBook {...props}/>} />
      <Route path = '/SingleBook' component={SingleBook} />
      </Container>
    );
  }
}

// const ConditionalView = Authenticate(BookList)(LoginPage);


export default withRouter(App);
