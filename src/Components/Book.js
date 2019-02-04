import React from "react";
import styled from "styled-components";

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
  return (
    <>
     
        <Cover src={props.Thumbnail} alt="Book Cover" />
        <P>Title: {props.Title}</P>
        <P>Author: {props.Author}</P>
        <P>Publisher: {props.Publisher}</P>
        <P>Description: {props.Description_Short}</P>
     
    </>
  );
};
export default Book;
