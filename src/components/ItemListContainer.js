import React from 'react';
import { useEffect, useState } from 'react';
import {prod} from '../productos.js';
import ItemList from './ItemList';



const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect (() => {
        setTimeout (() => {
        const data = new Promise((resolve,reject) => {
            resolve(prod);
        });
        data.then((data) => {
            setItems(data);
        });
        data.catch((err) => {
            console.log(err);
        });
}, 2000);
}, []);

    return (<div>  
        <ItemList items={items} />
     
    </div>
    );
};

export default ItemListContainer ;