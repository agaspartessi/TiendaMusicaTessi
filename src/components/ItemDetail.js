import React from 'react';
import "./Item.css";
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0);

    function handleOnAdd (canti) {
        setCantidad(canti);
    }
    console.log(cantidad);

    return(
        <div className="item-product">
            <img src={item.image} alt="Imagen" />
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
            <h3>${item.price}</h3>
            <h6>Apurate! nos quedan las últimas {item.stock} unidades</h6>
            <ItemCount initial="1" stock={item.stock} id={item.id} name={item.name} price={item.price} onAdd={handleOnAdd}></ItemCount>
            
        </div>
    );
}

export default ItemDetail;


