import "./OrderForm.css";
import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {CartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  tel: "",
};


const OrderForm = () => {
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState(initialState);
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const getInfo = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const orderConfirmed = () => {
    setUserInfo(initialState);
    vaciarCarrito();
    setOrderStatus("confirmed");
  };

  const createOrder = async () => {
    setOrderStatus("processing");
    const order = {
      productsOrder: cart.map((prod) => {
        return {
          id: prod.id,
          name: prod.name, 
          price: prod.price, 
          quantity: prod.count,
          totalProducPrice: prod.count * prod.price,
        };
      }),
      date: serverTimestamp(),
      userInfo: userInfo,
      total: precioTotal,
    };

    const collectionRef = collection(db, "orders");
    setOrderId((await addDoc(collectionRef, order)).id);
    orderConfirmed(orderId);
  };

  if (orderStatus === "confirmed") {
    return (
      <div className="d-flex justify-content-between flex-column align-items-center">
        <h1>CONFIRMACION</h1>
        <div className="mb-5">Su pedido ha sido enviado correctamente</div>
        <h3>
          Nro orden: <strong>{orderId}</strong>
        </h3>
        <h3>
          <Link to="/">Volver al Catalogo</Link>
        </h3>
      </div>
    );
  } else if (orderStatus === "processing") {
    return (
      <div className="d-flex justify-content-center">
        <h1>Procesando</h1>
      </div>
    );
  }

  return (
    <>
      <div className="form">
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={getInfo}
            className="form-control"
            id="floatingName"
            placeholder="Name"
          />
          <label htmlFor="floatingName">Nombre</label>
        </div>
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={getInfo}
            className="form-control"
            id="floatingLastName"
            placeholder="Last name"
          />
          <label htmlFor="floatingLastName">Apellido</label>
        </div>
        <div className="form-floating mb-3 inputContainer">
          <input onclick="ValidateEmail(document.form1.text1)"
            type="text"
            name="email"
            value={userInfo.email}
            onChange={getInfo}
            className="form-control"
            id="floatingAddress"
            placeholder="Email"
          />
          <label htmlFor="floatingAddress">Email</label>
        </div>
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="tel"
            value={userInfo.tel}
            onChange={getInfo}
            className="form-control"
            id="floatingTel"
            placeholder="Tel"
          />
          <label htmlFor="floatingTel">Telefono</label>
        </div>
        <button className="formButton" onClick={() => createOrder()}>
          Enviar Pedido
        </button>
      </div>
    </>
  );
};

export default OrderForm;
