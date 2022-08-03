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
      <Route path='/articles' element={<ItemDetailContainer title="Detalle"/>}></Route>
    
   
    {/* <ItemCount initial={0} stock={5}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
