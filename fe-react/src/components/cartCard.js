import React from 'react';


const CartCard = (props) => {

    console.log(props)

    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h4>{props.location}</h4>
            <p>{props.description}</p>
        </div>
    )

}


export default CartCard;