import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer title="Productos"/>}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer title="Detalle"/>}></Route>
      <Route path='/category/:categoria' element={ <ItemListContainer title="categoria"/>}></Route>   
      <Route path='*' element={ <ItemListContainer title="Productos"/>}></Route>   
    {/* <ItemCount initial={0} stock={5}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
