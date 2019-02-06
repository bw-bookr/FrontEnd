import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle
} from "reactstrap";

import SingleBook from "./SingleBook";

const Cover = styled.img`
  margin: 0 auto;
  padding: 10px;
  width: 100px;
  height: 100px;
`;
const P = styled.p`
  line-height: 0.8;
  margin-bottom: 2px;
  overflow-wrap: anywhere;
`;

const Book = props => {
  console.log("Props in book.js:  ", props);
  return (
    <>
    <Card className="shadow">
      <CardImg width="100%" src="https://via.placeholder.com/800x600.png" />
      <CardBody>
        <CardTitle><h5> {props.title}</h5> </CardTitle>
        
        <CardText> {props.short_description} </CardText>
        </CardBody>
        <CardFooter className="text-muted">{props.author} </CardFooter>
      {/* <Cover src="http://dummyimage.com/100x100.png/cc0000/ffffff" alt="Book Cover" />
        <P>Title: {props.title}</P>
        <P>Author: {props.author}</P>
        <P>Publisher: {props.publisher}</P>
        <P>Description: {props.short_description}</P> */}
        </Card>
    </>
  );
};
export default Book;
