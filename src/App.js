import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting="Productos"/>
  </>
  );
}

export default App;
