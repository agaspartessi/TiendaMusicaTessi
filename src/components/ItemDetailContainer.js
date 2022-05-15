import { useState, useEffect } from "react";
import {products} from '../productos.js';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);
    const { itemId } = useParams();
    console.log({ itemId });

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            const posArray = products.findIndex(element => element.id == itemId );
            console.log(posArray);
           resolve(products[posArray]);
        }, 2000)
    })


    useEffect(() => {
        getItem.then(data => setItems(data)).catch(err => console.log(err));
    }, [itemId])


    return(
        <ItemDetail item={items}/>
    );  
}

export default ItemDetailContainer;