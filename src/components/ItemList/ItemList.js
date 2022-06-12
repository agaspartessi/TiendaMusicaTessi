import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
      products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))
        
    );
};

export default ItemList;
