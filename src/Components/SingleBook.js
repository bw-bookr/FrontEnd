import React from "react";
import Axios from "axios";
import DeleteModal from "./deleteModal";
import AddReview from "./addReview";
import { Row, Col, Navbar, NavbarBrand, Container } from "reactstrap";
import './singlepage.css';

class SingleBook extends React.Component {
  state = {
    book: {
      title: "",
      author: "",
         },
         reviews: [{review:""}],
         bookId: null,
          };
  componentDidMount() {
    Axios.get("https://bookr-app-backend.herokuapp.com/api/book-collection")
      .then(res => {
        console.log("First Res:  ", res.data[0].author)
        const book = res.data.filter(
          bk => bk.id === Number(this.props.match.params.id)
        );
        console.log("Book => ", book);
        this.setState({ book: book[0] });
      })
      .catch(err => console.log(err));
      Axios
      .get(`https://bookr-app-backend.herokuapp.com/api/book-review/book_review/${Number(this.props.match.params.id)}`)
      .then (res=> {
       this.setState({ reviews: res.data.reviews }, () => console.log("reviews: ",this.state.reviews))
      }
      )
      .catch(err => console.log(err));
  }
//handlers


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

handleAddReview = (review,rating) => {
// post to endpoint for reviews. setstate to empty re-render with new review
console.log("Something:  ", review, rating);
const token = localStorage.getItem('jwt');
const requestOptions = {
	headers: {
		authorization: token,
	},
};
console.log("Got to handleAddReview", token);
const bookId= this.props.match.params.id
Axios
.post(`https://bookr-app-backend.herokuapp.com/api/book-review/add_review/${bookId}`, {review,rating}, requestOptions)
.then(res =>{ this.props.history.push(`/BookList/book/${bookId}`)
this.props.history.push('/BookList')});
.catch(err => console.log(err));
}

handleEditReview = something => {

}

handleDeleteBook = something => {
console.log("Got here");
const token = localStorage.getItem('jwt');
const requestOptions = {
	headers: {
		authorization: token,
	},
};
const bookId= this.props.match.params.id
Axios
.delete(`https://bookr-app-backend.herokuapp.com/api/book-collection/delete_book/${bookId}`, requestOptions)
.then(response => {
    console.log(response)
    this.props.history.push('/BookList');
})
.catch(err => console.log(err));
};


handleDeleteReview = something => {

}



  render() {
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
  <section className="container mb-5 mt-5 pt-5">
  <Row> 
    <Col md="6" className="align-self-center mb-3 text-right">
    <img src={this.state.book.cover_url} height="600" width="400" className="side-img img-shadow animated fadeIn" alt="Book"/>
    <DeleteModal buttonLabel="Delete" clickHandler={this.handleDeleteBook}/>
</Col>
<Col md="6" className="align-self-center animated fadeIn text-left">
<h2>{this.state.book.title}</h2>
<h5>{this.state.book.author}</h5>
<h6 className="text-muted">{this.state.book.publisher}</h6>
<p>{this.state.book.full_description}</p>
<div className="review mt-3">
<i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <p className="text-muted">{this.state.reviews.length} Reviews</p>
</div>
</Col>
</Row>
  </section>
  <section className="py-5" style ={{backgroundColor: "#F5F5F5"}}>
  <div className="container">
  <Row className="border-bottom text-left">
  <Col xs="7">
  <h3> Reviews </h3>
  </Col>
  <Col xs="5" className="text-right align-self-center">
  <AddReview buttonLabel="Add Review" clickHandler={this.handleAddReview} />
  </Col>
  </Row>
  { this.state.reviews.map((rev, index) =>  (
   
     <Row className="border-bottom text-left pt-2" key={rev.id}>
    { console.log("Rev ID: " , rev.id)}
 <Col xs={{size: "auto"}}>
 <h5>{rev.username} </h5> 
 </Col>
 <Col className="text-primary">
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
            <i className="far fa-star fa-sm"></i>
            <i className="far fa-star fa-sm"></i>
        
 </Col>
 <Col xs="12">
 <p >{rev.review}</p>
 </Col>
 </Row>
)) }
  </div>
    
    </section>

    
      <div>
 
        
 
      </div>
      </>
    );
  }
}
export default SingleBook;
