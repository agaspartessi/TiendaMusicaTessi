import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import './ItemListContainer.css';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
 

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
            if (clothing === undefined) {
              setProducts(docs);

            } else {
              setProducts(docs.filter((elem) => elem.category === clothing));
      

            }
          };
          getItem();
        }, [clothing]);

    return (
        <div className="cards-productos">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;