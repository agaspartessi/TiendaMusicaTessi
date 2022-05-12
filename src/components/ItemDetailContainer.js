import { useState, useEffect } from "react";
import {prod} from '../productos.js';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);


    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(prod[0]);
        }, 1000)
    })


    useEffect(() => {
        getItem.then(res => setItems(res)).catch(e => console.log(e));
    }, [])


    return(
        <ItemDetail item={items}/>
    );  
}

export default ItemDetailContainer;