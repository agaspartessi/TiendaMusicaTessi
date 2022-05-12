import { useState, useEffect } from "react";
import {prod} from '../productos.js';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);


    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(prod[0]);
        }, 2000)
    })


    useEffect(() => {
        getItem.then(data => setItems(data)).catch(err => console.log(err));
    }, [])


    return(
        <ItemDetail item={items}/>
    );  
}

export default ItemDetailContainer;