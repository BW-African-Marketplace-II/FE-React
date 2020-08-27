import React from 'react';


const ItemCard = props => {

    if (props.items.length ===0) {
        return <div></div>
    }
    else {
        return (
            props.items.map(item => {
                return (
                    <div className="item-card" key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        )
    }
}



export default ItemCard;
