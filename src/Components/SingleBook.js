import React from "react";
import styled from "styled-components";
import Axios from "axios";
import DeleteModal from "./deleteModal";
import AddReview from "./addReview";
import { Row, Col, Navbar, NavbarBrand, Button, Container } from "reactstrap";
import './singlepage.css';

class SingleBook extends React.Component {
  state = {
    book: {
      title: "",
      author: "",
         },
         reviews: [{review:""}]
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

handleAddReview = something=> {
// post to endpoint for reviews. setstate to empty re-render with new review
console.log("Got to handleAddReview");
}

handleEditReview = something => {

}

handleDeleteBook = something => {
console.log("Got here");
}

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
    <img src='https://via.placeholder.com/800x600.png' className="side-img img-shadow animated fadeIn" />
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
 <h5>{rev.user_id} </h5> 
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


let revjjiews =[{
  "id": 1,
  "user_id": 5,
  "book_id": 5,
  "rating": 5,
  "review": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue"
}, {
  "id": 2,
  "user_id": 4,
  "book_id": 5,
  "rating": 3,
  "review": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut"
}, {
  "id": 3,
  "user_id": 1,
  "book_id": 7,
  "rating": 3,
  "review": "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula"
}, {
  "id": 4,
  "user_id": 1,
  "book_id": 9,
  "rating": 4,
  "review": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor"
}, {
  "id": 5,
  "user_id": 1,
  "book_id": 7,
  "rating": 4,
  "review": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a"
}, {
  "id": 6,
  "user_id": 1,
  "book_id": 5,
  "rating": 1,
  "review": "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui"
}, {
  "id": 7,
  "user_id": 3,
  "book_id": 8,
  "rating": 2,
  "review": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci"
}, {
  "id": 8,
  "user_id": 1,
  "book_id": 6,
  "rating": 3,
  "review": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien"
}, {
  "id": 9,
  "user_id": 4,
  "book_id": 2,
  "rating": 5,
  "review": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam"
}, {
  "id": 10,
  "user_id": 2,
  "book_id": 6,
  "rating": 2,
  "review": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum"
}, {
  "id": 11,
  "user_id": 4,
  "book_id": 1,
  "rating": 1,
  "review": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
}, {
  "id": 12,
  "user_id": 2,
  "book_id": 1,
  "rating": 4,
  "review": "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non"
}, {
  "id": 13,
  "user_id": 1,
  "book_id": 5,
  "rating": 4,
  "review": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi"
}, {
  "id": 14,
  "user_id": 4,
  "book_id": 10,
  "rating": 2,
  "review": "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede"
}, {
  "id": 15,
  "user_id": 5,
  "book_id": 7,
  "rating": 5,
  "review": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor"
}, {
  "id": 16,
  "user_id": 2,
  "book_id": 8,
  "rating": 3,
  "review": "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis"
}, {
  "id": 17,
  "user_id": 4,
  "book_id": 10,
  "rating": 1,
  "review": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea"
}, {
  "id": 18,
  "user_id": 3,
  "book_id": 7,
  "rating": 4,
  "review": "id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit"
}, {
  "id": 19,
  "user_id": 4,
  "book_id": 7,
  "rating": 2,
  "review": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor"
}, {
  "id": 20,
  "user_id": 2,
  "book_id": 4,
  "rating": 2,
  "review": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor"
}, {
  "id": 21,
  "user_id": 4,
  "book_id": 8,
  "rating": 5,
  "review": "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci"
}, {
  "id": 22,
  "user_id": 1,
  "book_id": 8,
  "rating": 1,
  "review": "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo"
}, {
  "id": 23,
  "user_id": 2,
  "book_id": 5,
  "rating": 5,
  "review": "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla"
}, {
  "id": 24,
  "user_id": 2,
  "book_id": 10,
  "rating": 1,
  "review": "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna"
}, {
  "id": 25,
  "user_id": 3,
  "book_id": 11,
  "rating": 1,
  "review": "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet"
}, {
  "id": 26,
  "user_id": 4,
  "book_id": 6,
  "rating": 2,
  "review": "aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac"
}, {
  "id": 27,
  "user_id": 5,
  "book_id": 1,
  "rating": 3,
  "review": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris"
}, {
  "id": 28,
  "user_id": 3,
  "book_id": 2,
  "rating": 3,
  "review": "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis"
}, {
  "id": 29,
  "user_id": 3,
  "book_id": 7,
  "rating": 2,
  "review": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
}, {
  "id": 30,
  "user_id": 5,
  "book_id": 8,
  "rating": 4,
  "review": "volutpat quam pede lobortis ligula sit amet eleifend pede libero"
}]