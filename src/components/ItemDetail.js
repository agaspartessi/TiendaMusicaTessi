import React from 'react';
import "./Item.css";

const ItemDetail = ({item}) => {
    return(
        <div className="item-product">
            <img src={item.image} alt="Imagen" className='tamanioimagen'/>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
            <h3>${item.price}</h3>
            <h6>Apurate! nos quedan las últimas {item.stock} unidades</h6>
        </div>
    );
}

export default ItemDetail;


