import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Item = ({ product }) => {

    return (
        <Link to={`/item/${product.id}`} className={"card-item"}>
                <Card key={product.id} style={{ width: '18rem', 
                height: '28rem', 
                borderRadius: '10px', 
                boxShadow: '2px 2px 2px rgba(110, 114, 113, 0.274)' }}>
        <Card.Img variant="top" src= {product.image} className="tamanioimagen" />
        <Container>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
           Precio: $ {product.price}
            </Card.Text>   
        </Card.Body>
        </Container>
        </Card>
        </Link>
    )

};

export default Item;