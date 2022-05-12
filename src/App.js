import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
        <NavBar></NavBar> 
        <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
