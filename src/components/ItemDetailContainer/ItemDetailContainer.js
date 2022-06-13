
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebaseConfig";
import Spinner from 'react-bootstrap/Spinner';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);
    const { itemId } = useParams();
    console.log({ itemId });
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "instrumentos2"), where(documentId(), '==', itemId));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs[0]);
            setLoading(false);
      

          };
          getItem();
        }, [itemId]);

        return (
          <>  
          {loading ? (
                  <div className="spinner">
                      <Spinner animation="grow" variant="secondary" />
                  </div>
                  ) : (
  
                  <div className="card-producto">
  
                      <ItemDetail item={items} />
      
                  </div>
          ) }
              
          </>
      )


}

export default ItemDetailContainer;