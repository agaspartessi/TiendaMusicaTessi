import React from 'react';
import { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { CartContext } from "./CartContext";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setAllProducts} = useContext(CartContext);

  let category = useParams();
  let clothing = category.categoryId;

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "instrumentos2"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
          //  setAllProducts(docs);
            if (category.categoryId === undefined) {
              setProducts(docs);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            } else {
              setProducts(docs.filter((elem) => elem.category === clothing));
      
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }
          };
          getItem();
        }, [clothing]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;