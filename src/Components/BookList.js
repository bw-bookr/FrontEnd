import React from "react";

import Book from "./Book";
import Axios from "axios";
import { Row, Col, Navbar, NavbarBrand, Container } from "reactstrap";

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: 1,
      bookList: []
    };
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getBookList();
  }

  //Function to get the Data from the backend via json
  getBookList() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    Axios.get(
      "https://bookr-app-backend.herokuapp.com/api/book-collection",
      requestOptions
    )
      //.get("https://statsapi.mlb.com/api/v1/people/660670/stats?stats=byDateRange&season=2018&group=hitting&startDate=&endDate=&leagueListId=mlb_milb")
      .then(res => {
        console.log("Books from backend => ", res.data);
        this.setState({ bookList: res.data });
        console.log("Books in State:  ", this.state.bookList);
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.bookList) return <p>Loading data</p>;
    return (
      <>
        <Navbar
          id="nav"
          className="navbar navbar-expand-lg fixed-top navbar-light nav-lg bg-light"
        >
          <Container>
            <NavbarBrand href="https://bookrmarketing1.netlify.com/">Bookr</NavbarBrand>
          </Container>
        </Navbar>
          
        <Container className="mt-5 pt-5">
          <Row className="card-columns">
            {this.state.bookList.map(book => (
              <Col lg="4" md="6" style={{ marginBottom: "1rem" }}>
                <Book  key={book.id} {...book} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
