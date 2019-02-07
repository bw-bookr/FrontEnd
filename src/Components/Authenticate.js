

import React, { Component } from "react";
import BookList from "./BookList";
import LoginPage from "./Login";

class Authenticate extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    const usr = localStorage.getItem("jwt");

    if (usr === null) {
      this.props.history.push("/LoginPage");
      this.setState({ loggedIn: false }, () => {});
    } else {
      this.props.history.push("/BookList");
      this.setState({ loggedIn: true }, () => {});
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <BookList />;
    }

    return <LoginPage />;
  }
}

export default Authenticate;
