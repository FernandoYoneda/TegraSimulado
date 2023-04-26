import "./App.css";

//components
import Header from "./components/Header";
import Filter from "./domain/product/Filter";

//pages
import Products from "./page/Products";

function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Filter />
      <Products />
    </div>
  );
}

export default App;
