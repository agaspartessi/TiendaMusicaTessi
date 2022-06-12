import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css"




export default function CartWidget () {
    const {cart, cantidadTotal} = useContext(CartContext);


    return (
        <>
        {/* Condicional para mostrar el contador sólo si tiene productos */}
        {cart.length === 0 ? (
        <div className= "icono-carrito">
            <Link to='/cart'>
                <FontAwesomeIcon 
                    icon={faBagShopping} 
                    style={{fontSize:36, color:'rgb(110, 114, 113)'}} 
                    className="icono-fontawesome" />               
            </Link>
        </div>) : (
            
            <div className= "icono-carrito">
                <Link to='/cart'>               
                    <FontAwesomeIcon 
                        icon={faBagShopping} 
                        style={{fontSize:36, color:'rgb(110, 114, 113)'}} 
                        className="icono-fontawesome"/>               
                    <span className="" >{cantidadTotal()}</span>
                </Link>
            </div>)
        }
        </>
    )
}