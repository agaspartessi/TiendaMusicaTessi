import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export default function CartContextProvider ({children}) {

    const [cart, setCart] = useState([]);

    //agregar items a cart sin duplicar
    const addToCart = (item) => {
        
        let i = cart.findIndex(elem => elem.id === item.id);
       

            if (i !== -1) {
                const newCart = [...cart];
                newCart[i].count = newCart[i].count + item.count;
                setCart(newCart);

            } else {
                setCart([...cart, item]);
            }  
   // probando que acá llegue el item.id  console.log(item.id)  ; OK
    }; 

    //remover un item 
    const removerItem = (id) => {setCart(cart.filter((r) => r.id !== id))};

    //comprar y resetear el array con los items
    const vaciarCarrito = () => {setCart([])};


       //sumar precio de todos los items 
       const [precioTotal, setPrecioTotal] = useState(0);

       useEffect(() => {

           let total = 0;
           cart.forEach(item => {
             total+= item.price * item.count;
            
            });
           console.log(total);
           
           setPrecioTotal(total);
           
       }, [cart])
       console.log(precioTotal);

        //sumar la cantidad total de productos
        const cantidadTotal = ()=> (cart.reduce((total, item)=> total+= item.count, 0));
        


    return (
        <CartContext.Provider value={{cart, addToCart, removerItem, vaciarCarrito, precioTotal, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    );

}