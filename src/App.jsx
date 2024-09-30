import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/stickers' element={<ItemListContainer category="stickers" />} />
          <Route path='/categoria/estampados' element={<ItemListContainer category="estampados" />} />
          <Route path='/categoria/papeleria' element={<ItemListContainer category="papeleria" />} />
          <Route path='/categoria/cuadro' element={<ItemListContainer category="cuadro" />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
