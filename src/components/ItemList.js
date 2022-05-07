import React from 'react';
import Item from './Item';
import "./ItemList.css";

const ItemList = ({items}) => {
return (
    <div className="item-list">
        { items.map( (iteracion) => {
            return <Item key={iteracion.id} item={iteracion} />;
        }

        )}
    </div>
    );

}

export default ItemList;
