import React, { Component } from 'react';
import ItemCount from './ItemCount';

/*const arr = ["Antonio Gaspar Tessi","Jorge Perez", "Juan Gonzalez"];
function Greeting(props) {
    return <h1>Hola Bienvenido a mi tienda {props.name}</h1>;
}*/

const ItemListContainer = () => {
    
        return(
            <div>
             <ItemCount stock="22" initial="10" ></ItemCount>   
            </div>
            ); 
}

export default ItemListContainer ;