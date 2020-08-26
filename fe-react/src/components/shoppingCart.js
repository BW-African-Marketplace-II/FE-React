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
            <CartCard
                name={data.name}
                price={data.price}
                location={data.location}
                description={data.description}
            />
        </div>
    )

}


export default ShoppingCart;
