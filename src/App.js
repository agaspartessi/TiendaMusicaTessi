import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';
import React from 'react';
import OrderForm from './components/OrderForm/OrderForm';




function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
        <NavBar></NavBar>  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route exact path="/orderform" element={<OrderForm />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
