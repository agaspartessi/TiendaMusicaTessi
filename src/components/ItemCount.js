import React, { useState } from 'react';


const ItemCount = (props) => {

  const [count, setCount] = useState(parseInt(props.initial));

  const sumarcarrito = () => {
      
      if(count < props.stock){
          setCount(count + 1);
      }
  }

  const menorquecero = () => {
     
      if(count > 0 ){
          setCount(count - 1);
      }
  }


  return(
      <div>
          <button onClick={menorquecero}>-</button>
          <span>{count}</span>
          <button onClick={sumarcarrito}>+</button>
          <br></br>
          <button>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;