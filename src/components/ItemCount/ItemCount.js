import { useState, useContext} from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../Context/CartContext";
import "./ItemCount.css"

const ItemCount = ({id, name, price, stock, onAdd}) => {
//Indico la cantidad inicial
  const [count, setCount] = useState(1);

  const { addToCart } = useContext(CartContext);

  const sumarcarrito = () => {
      
      if(count < stock){
          setCount(count + 1);
      }
  }

  const menorquecero = () => {
     //lo cambié a que el limite sea 1 porque cero no tiene sentido
      if(count > 1 ){
          setCount(count - 1);
      }
  }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
     <div>
          <div className="contenedor-botones">
              <button className="botones-itemcount" onClick={menorquecero}>-</button>
              <p className="cantidad-itemcount">{count}</p>
              <button className="botones-itemcount" onClick={sumarcarrito}>+</button>
          </div>
          <div className="contenedor-botones">
      <Button variant="dark" size="lg" onClick={()=>{handleShow();
                                         addToCart({id, name, price, count, stock});
                                          setCount(1);
                                          onAdd(count);
                                      }}>
        Agregar al carrito
      </Button>
      </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>La Pentatonica Música</Modal.Title>
        </Modal.Header>
        <Modal.Body>Agregaste {name} al carrito.</Modal.Body>
        <Modal.Footer>
        <Link to={"/cart"} className="ver-carrito">Ver carrito</Link>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
/*
  return(
      <div>
          <button onClick={menorquecero}>-</button>
          <span>{count}</span>
          <button onClick={sumarcarrito}>+</button>
          <br></br>
          <Button onClick={()=>{handleShow();
                                addToCart({id, name, price, count, stock});
                                setCount(1);
                                onAdd(count);
                                }}>                                  
          Agregar al carrito
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tienda Música Tessi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Agregaste el instrumento {name} al carrito.</Modal.Body>
          <Modal.Footer>
          <Link to={"/cart"}>Ver carrito</Link>
          </Modal.Footer>
        </Modal>
          
      </div>
  )*/
}

export default ItemCount;