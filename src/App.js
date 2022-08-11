import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer title="Catálogo"/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer title="Detalle"/>}></Route>
        <Route path='/category/:category' element={ <ItemListContainer/>}></Route>   
        <Route path='*' element={ <ItemListContainer title="Catálogo"/>}></Route>   
        <Route path='/cart' element= {<h1>Carrito</h1>}> </Route>   
      </Routes>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
