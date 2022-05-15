import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
