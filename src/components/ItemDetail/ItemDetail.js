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
            <br></br>
            ¡Quedan {item.stock} disponibles! 
            </Card.Text>
            <ItemCount initial="1" stock={item.stock} id={item.id} name={item.name} price={item.price} onAdd={handleOnAdd}></ItemCount>
            <br/>   
        </Card.Body> 
        </Card>     
     
)


}

export default ItemDetail;


