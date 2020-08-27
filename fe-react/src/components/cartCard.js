import React from 'react';
import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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


const CartCard = ({name, price, location, description}) => {

    // console.log(props)

    const handleOnDragStart = (e) => e.preventDefault()

    return (
        <AliceCarousel onDragStart={handleOnDragStart}>
            <Name>{name}</Name>
            <Price>${price}</Price>
            <Location>{location}</Location>
            <Description>{description}</Description>
        </AliceCarousel>
    )

}


export default CartCard;