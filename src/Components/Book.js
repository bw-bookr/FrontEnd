import React from "react";
import styled from "styled-components";
import './Login.css';
import {
  Card,
  CardImg,
  CardLink,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle
} from "reactstrap";
import SingleBook from "./SingleBook";
import { NavLink } from 'react-router-dom';

const Book = props => {
  console.log("Props:  ", props);
  return (
   
    <>
    <NavLink style={{ textDecoration: 'none' }} className="text-dark" to={`/BookList/book/${props.id}`} >
      <Card className="shadow">
        <CardImg width="100%" src="https://via.placeholder.com/400x200.png" />
        <CardBody>
          <CardTitle>
            <h5> {props.title}</h5>{" "}
          </CardTitle>

          <CardText> {props.short_description} </CardText>
        </CardBody>
       
        <CardFooter style={{ color: "#5A6169" }}>{props.author} </CardFooter>
        
      </Card>
      </NavLink>
    </>
  );
};
export default Book;
