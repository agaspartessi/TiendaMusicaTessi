import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div >
            <div>
            <img src={product.image} alt="Imagen" className='tamanioimagen'/>
            </div>
            <div>
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>

                <Link to={`/item/${product.id}`}>
                    <button >Ver detalles</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;