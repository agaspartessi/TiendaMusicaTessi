import React, { useContext, useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {CartContext} from "../../Context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import "./OrderForm.css";



export default function OrderForm(){
    
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [nombre, setNombre] =useState("");
    const [telefono, setTelefono] =useState("");
    const [correo, setCorreo] =useState("");
    const [corroboroCorreo, setCorroboroCorreo] =useState("")

    const inputNombreChange = event => setNombre(event.target.value);
    const inputTelefonoChange = event => setTelefono(event.target.value);
    const inputCorreoChange = event => setCorreo(event.target.value);
    const inputCorroboroCorreoChange = event => setCorroboroCorreo(event.target.value);
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(correo === corroboroCorreo){
            nuevaOrden();
            vaciarCarrito();
            e.target.reset();
        }
        else{
            alert("El correo electrónico no coincide en ambos campos.");
        }
    };

    const nuevaOrden = () => {

        const fecha = serverTimestamp();
        const orden = {
            buyer: { nombre, telefono, correo },
            items: cart,
            date: fecha,
            total: precioTotal,
        };

        const ordenes = collection(db, "orders");
        addDoc(ordenes, orden).then(doc => {
            alert(`Su pedido fue realizado con éxito, el id de su compra es: ${doc.id}`);
        }).catch(error => {
            console.log(error);
        });
    };


    return(
        <div className='formulario-compras-container'>
            <div className='formulario-cliente'>
                <h1>Datos de contacto</h1>
                <form onSubmit={ onSubmit }>
                    <div>
                        <div>
                        <label>Nombre y apellido:</label>
                        </div>
                        <div>
                        <input value={ nombre } onChange={ inputNombreChange } type="text" placeholder='Ingrese nombre y apellido' required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Teléfono de contacto:</label>
                        </div>
                        <div>
                            <input value={ telefono } onChange={ inputTelefonoChange } type="text" placeholder='Ingrese Telefono' required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Correo electrónico:</label>
                        </div>
                        <div>
                            <input value={ correo } onChange= { inputCorreoChange } type="email" placeholder='Ingresa tu correo' required></input>
                        </div>
                        <div>
                            <label>Repita su correo electrónico:</label>
                        </div>
                        <div>
                            <input value={ corroboroCorreo } onChange={ inputCorroboroCorreoChange } type="email" placeholder='Volve a ingresarlo' required></input>
                        </div>
                    </div>
                    <button className='button-formulario' type='submit' >Enviar y finalizar compra</button>
                </form>
            </div>
        </div>
    )
}
