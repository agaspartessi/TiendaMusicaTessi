import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css"

export default function Cart() {

    const {cart, removerItem, vaciarCarrito, precioTotal, cantidadTotal } = useContext(CartContext);

    console.log(cart);

    let noStock = false;

    return (
        <>
       
        <h2 className="titulo-cart">Mi carrito de compras</h2>

        {/* Condicional para sacar mensaje de "Tu carrito está vacío" */}

        {cart.length >= 1 ?  cart.map((c) => (
            <div className="colorfondocarrito" key={c.id}>
                <ul>
                    <li>
                        <b>Producto:</b> {c.name} | 
                        <b> Precio:</b> $ {c.price} | 
                        <b> Cantidad:</b> {c.count} | 
                        <b> Total:</b> $ {c.price * c.count}  
                        <button className="boton-remover" onClick={() => removerItem(c.id)}> Remover </button>                    
                        {c.stock < c.count  ?  (<p style={{color:'red', textAlign: 'center'}}>
                                                No hay suficiente stock de este producto {noStock=true}</p>                                                                                    
                                            ) : ( <p></p>
                        )}
                    </li>
                </ul>  
            </div>))   : 

            <div className="carrito">
                <h2>Tu Carrito está vacío</h2>
                <Link to= {"/"} className="ir-a-tienda">Ir a Tienda</Link>
            </div>
        }

        {cart.length >= 1 ? 
            <div className="contenedor-boton-comprar">
                <p><b>Precio Total: </b>$ {precioTotal}</p>
                <p><b>Cantidad Total: </b>{cantidadTotal()}</p>
                <Link to= {"/orderform"}>
                <button type="button" className="boton-comprar" disabled={noStock}>Comprar</button>               
                </Link>
                <button type="button" className="boton-comprar" onClick={() => vaciarCarrito()}>
              Vaciar carrito
            </button>    
            </div>  :
            <div></div>     
        }
        </>
   
        
    )

}
