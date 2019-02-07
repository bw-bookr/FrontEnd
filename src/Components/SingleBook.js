import React from "react";
import styled from "styled-components";
import Axios from "axios";

class SingleBook extends React.Component {
  state = {
    book: {
      title: "",
      author: ""
    }
  };
  componentDidMount() {
    Axios.get("https://bookr-app-backend.herokuapp.com/api/book-collection")
      .then(res => {
        const book = res.data.filter(
          bk => bk.id === Number(this.props.match.params.id)
        );
        console.log("Book => ", book);
        this.setState({ book: book[0] });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        Title: {this.state.book.title}
        Author: {this.state.book.author}
      </div>
    );
  }
}
export default SingleBook;
