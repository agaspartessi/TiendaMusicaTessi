import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import React from 'react';




function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
        <NavBar></NavBar>  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
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
