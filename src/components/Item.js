import React from 'react';
import "./Item.css";
import ItemCount from "./ItemCount";

const Item = ({item}) => {
    const {name, price, image, stock} = item ;
    return(
        <div className="item-product">
            <img className="tamanioimagen" src={image} alt={name} />
            <h5> {name}</h5>
            <h6>{price}</h6>
            <ItemCount initial="1" stock={stock}></ItemCount>
            
        </div>
    );
}

export default Item;