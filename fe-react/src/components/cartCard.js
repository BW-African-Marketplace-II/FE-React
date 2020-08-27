import React from 'react';
import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Cards = styled.div`
  border: 2px solid black;
  background: rgb(164, 164, 165);
  align-items: center;
  height: 10rem;
  width: 15rem;
`

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`

const Price = styled.div`
  font-size 1.3rem;
  text-align: center;
`

const Location = styled.div`
  font-size: 1.1rem;
  text-align: center;
  text-transform: capitalize;
  font-style: italic;
`

const Description = styled.div`
  text-align: center;

`


const CartCard = (props) => {

    // console.log(props)

    return (
        <Cards>
            <Name>{props.name}</Name>
            <Price>${props.price}</Price>
            <Location>{props.location}</Location>
            <Description>{props.description}</Description>
        </Cards>
    )

}


export default CartCard;