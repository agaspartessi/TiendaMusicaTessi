
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);
    const { itemId } = useParams();
    console.log({ itemId });
    const [loading] = useState(false);

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "instrumentos2"), where(documentId(), '==', itemId));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs[0]);
          };
          getItem();
        }, [itemId]);



    return(
        <ItemDetail item={items}/>
    );  
}

export default ItemDetailContainer;