import React from 'react';
import Item from './Item';
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;
