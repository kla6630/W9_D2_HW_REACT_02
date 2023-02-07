import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";

import fantasyBooks from "../data/books/fantasy.json";
import historyBooks from "../data/books/history.json";
import horrorBooks from "../data/books/horror.json";
import romanceBooks from "../data/books/romance.json";
import scifiBooks from "../data/books/scifi.json";

function books() 
{
    return(
        horrorBooks.map((book) =>{
            return(
    <MDBCard class="MDBCard">
      <MDBCardImage src={book.img} position="top" alt="..." />
      <MDBCardBody>
        <MDBCardTitle>{book.title}</MDBCardTitle>
        <MDBCardText>
          {book.price}
        </MDBCardText>
        <MDBBtn href="#">Order</MDBBtn>
      </MDBCardBody>
    </MDBCard> )})
  )
};

export default function books()
