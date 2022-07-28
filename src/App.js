import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer title="Productos"/>
    {/* <ItemCount initial={0} stock={5}/> */}
  </>
  );
}

export default App;
