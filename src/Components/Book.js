import React from "react";

import './Login.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter
 } from "reactstrap";

import { NavLink } from 'react-router-dom';

const Book = props => {
  
  return (
   
    <>
    <NavLink style={{ textDecoration: 'none' }} className="text-dark" to={`/BookList/book/${props.id}`} >
      <Card className="shadow">
        <CardImg  height = "400" width="200" src={props.cover_url}  />
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
