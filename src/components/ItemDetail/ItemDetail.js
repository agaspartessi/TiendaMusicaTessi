import React from 'react';
import "../Item/Item.css";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Card from "react-bootstrap/Card";


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0);

    function handleOnAdd (canti) {
        setCantidad(canti);
    }
    console.log(cantidad);

    return (

        <Card key={item.id} style={{ width: '24rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Precio: $ {item.price}</Card.Subtitle>
            <Card.Text>
            {item.description}
            </Card.Text>
            <ItemCount initial="1" stock={item.stock} id={item.id} name={item.name} price={item.price} onAdd={handleOnAdd}></ItemCount>
            <br/>   
        </Card.Body>
        </Card>     
     
)
    /*

    return(
        <div className="item-product">
            <img src={item.image} alt="Imagen" />
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h3>${item.price}</h3>
            <h6>Apurate! nos quedan las últimas {item.stock} unidades</h6>
            <ItemCount initial="1" stock={item.stock} id={item.id} name={item.name} price={item.price} onAdd={handleOnAdd}></ItemCount>
            
        </div>
    );*/
}

export default ItemDetail;


