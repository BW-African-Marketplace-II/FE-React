import React, { useState, useEffect } from "react";
import axios from 'axios'


import CartCard from './cartCard'

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
        <div>
            {data.map(item => (
                <CartCard
                name={item.name}
                price={item.price}
                location={item.location}
                description={item.description}
            />
            ))}
            
        </div>
    )

}


export default ShoppingCart;
