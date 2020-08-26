import React from 'react';


const CartCard = ({name, price, location, description}) => {

    return (
        <div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{location}</h4>
            <p>{description}</p>
        </div>
    )

}


export default CartCard;