import React from "react";
import styled from "styled-components";
import Book from "./Book";

const Container = styled.div`
  border: 1px red solid;
  display: inline-flex;
  flex-direction: column;
  width: auto;
  margin: 15px;
`;

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: 1,
      bookList
    };
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    // eventually need axios call axios.get('assets/samplejson/customerlist.json').then(response => {
    this.setState({ bookList: bookList });
  }

  render() {
    console.log("TS Booklist: ", this.state.bookList);
    if (!this.state.bookList) return <p>Loading data</p>;
    return this.state.bookList.map(book => (
      <Container key={book.id}>
        <Book {...book} />
      </Container>
    ));
  }
}

let bookList = [
  {
    id: 1,
    Publisher: "Medhurst-McLaughlin",
    review: {
      name: "Zola Harston",
      text:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    Title: "Virtual fault-tolerant flexibility",
    Thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    Description_Short: "Stress fracture, unsp ankle, subs for fx w malunion",
    Description_Long:
      "Stress fracture, unspecified ankle, subsequent encounter for fracture with malunion",
    Author: "Fianna Arndt"
  },
  {
    id: 2,
    Publisher: "Schneider, Emmerich and Hilpert",
    review: {
      name: "Darnell Iacavone",
      text:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
    },
    Title: "Function-based didactic framework",
    Thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    Description_Short: "Preterm [premature] newborn [other]",
    Description_Long: "Preterm [premature] newborn [other]",
    Author: "Catarina Jandel"
  },
  {
    id: 3,
    Publisher: "Keebler LLC",
    review: {
      name: "Margalit Craker",
      text:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    Title: "Polarised mission-critical data-warehouse",
    Thumbnail: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    Description_Short: "Gastritis and duodenitis",
    Description_Long: "Gastritis and duodenitis",
    Author: "Mellisent Skechley"
  },
  {
    id: 4,
    Publisher: "Schmidt, Crist and Williamson",
    review: {
      name: "Walt Cheesworth",
      text:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    Title: "Exclusive neutral product",
    Thumbnail: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
    Description_Short: "Nondisp fx of lateral malleolus of r fibula, 7thQ",
    Description_Long:
      "Nondisplaced fracture of lateral malleolus of right fibula, subsequent encounter for open fracture type I or II with malunion",
    Author: "Regen Pughe"
  },
  {
    id: 5,
    Publisher: "Goodwin Inc",
    review: {
      name: "Aleece Eunson",
      text: "In congue. Etiam justo. Etiam pretium iaculis justo."
    },
    Title: "Optimized motivating solution",
    Thumbnail: "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
    Description_Short: "Railroad track as place",
    Description_Long:
      "Railroad track as the place of occurrence of the external cause",
    Author: "Natalee Owen"
  },
  {
    id: 6,
    Publisher: "Predovic-Schaden",
    review: {
      name: "Ericha Chumley",
      text:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
    },
    Title: "Compatible client-server focus group",
    Thumbnail: "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
    Description_Short: "Other sprain of left thumb, initial encounter",
    Description_Long: "Other sprain of left thumb, initial encounter",
    Author: "Birgitta Gianninotti"
  },
  {
    id: 7,
    Publisher: "Goyette Inc",
    review: {
      name: "Toiboid Quail",
      text:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
    },
    Title: "Expanded value-added software",
    Thumbnail: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
    Description_Short: "Pathological dislocation of right knee, NEC",
    Description_Long:
      "Pathological dislocation of right knee, not elsewhere classified",
    Author: "Arin Longbottom"
  },
  {
    id: 8,
    Publisher: "Langosh-Barrows",
    review: {
      name: "Chance Laurence",
      text:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    Title: "De-engineered zero tolerance hub",
    Thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    Description_Short:
      "Polyhydramnios, first trimester, not applicable or unsp",
    Description_Long:
      "Polyhydramnios, first trimester, not applicable or unspecified",
    Author: "Marlon Motten"
  },
  {
    id: 9,
    Publisher: "Cruickshank Group",
    review: {
      name: "Noel Saladin",
      text: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    Title: "Operative multi-state algorithm",
    Thumbnail: "http://dummyimage.com/100x100.bmp/dddddd/000000",
    Description_Short: "Underdosing of methadone, initial encounter",
    Description_Long: "Underdosing of methadone, initial encounter",
    Author: "Ephraim Oxberry"
  },
  {
    id: 10,
    Publisher: "Baumbach-Jakubowski",
    review: {
      name: "Johny Mannix",
      text:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    Title: "Sharable value-added customer loyalty",
    Thumbnail: "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
    Description_Short: "Displ seg fx shaft of unsp tibia, 7thQ",
    Description_Long:
      "Displaced segmental fracture of shaft of unspecified tibia, subsequent encounter for open fracture type I or II with malunion",
    Author: "Romola Simonazzi"
  }
];
