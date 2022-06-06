import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Item.css";

export default function Cart() {

    const {cart, removerItem, comprarTodo, precioTotal, cantidadTotal } = useContext(CartContext);

    console.log(cart);

    let noStock = false;
    

    return (
        <>
       
        <h2 className="">Mi carrito de compras</h2>

        {/*tu carrito esta vacío */}

        {cart.length >= 1 ?  cart.map((c) => (
            <div className="colorfondocarrito" key={c.id}>
                <ul className="colorfondocarrito">
                    <li>
                        <b>Producto:</b> {c.name} | 
                        <b> Precio:</b> $ {c.price} | 
                        <b> Cantidad:</b> {c.count} | 
                        <b> Total:</b> $ {c.price * c.count}  
                        <button className="" onClick={() => removerItem(c.id)}> Remover </button>                    
                        {c.stock < c.count  ?  (<p style={{color:'red', textAlign: 'center'}}>
                                                No hay suficiente stock de este producto {noStock=true}</p>                                                                                    
                                            ) : ( <p></p>
                        )}
                    </li>
                </ul>  
            </div>))   : 

            <div className="">
                <h2>Tu Carrito está vacío</h2>
                <Link to= {"/"} >Ir a Tienda</Link>
            </div>
        }

        {cart.length >= 1 ? 
            <div >
                <p><b>Precio Total: </b>$ {precioTotal}</p>
                <p><b>Cantidad Total: </b>{cantidadTotal()}</p>  
                <Link to= {"/orderform"}>        
               <button type="button" >Comprar</button>   
                </Link>          
            </div>  :
            <div></div>     
        }
        </>
   
        
    )
}
