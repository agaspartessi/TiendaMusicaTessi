import React from 'react';
import { useEffect, useState } from 'react';
import { traerProductos } from '../productos.js';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => console.log(error));
    }, [categoryId]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
