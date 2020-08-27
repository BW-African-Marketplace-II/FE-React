import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'



import CartCard from './cartCard'


const CartContainer = styled.div`
    width: 80%;
    height: 35rem;
    margin-left: 10%;
    margin-top: 30%;
    background: #D4D4D5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`


function ShoppingCart() {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://af-market.herokuapp.com/items')
        .then((response) => {
            setData(response.data)
        })
    }, [])

    console.log(data)

    return (
        <CartContainer>
            {data.map(item => (
                <CartCard
                name={item.name}
                price={item.price}
                location={item.location}
                description={item.description}
            />
            ))}
            
        </CartContainer>
    )

}


export default ShoppingCart;
