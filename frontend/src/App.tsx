import "./App.css";
import imageSVG from "./assets/image/mikael-stenberg-cJeGGOI8eE0-unsplash.jpg";

//components
import Button from "./components/Button";
import PriceLabel from "./components/Label/Price";
import ProductDescriptionLabel from "./components/Label/Product/Description";
import ProductImage from "./components/Label/Product/Image";
import ProductNameLabel from "./components/Label/Product/Name";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Teste")} text="Comprar" variant="small" />
      <Button onClick={() => alert("Teste")} text="Entrar" variant="big" />
      <div>
        <Button
          onClick={() => alert("Teste")}
          text="R$5 à R$25"
          variant="small"
        />
        <Button
          onClick={() => alert("Teste")}
          text="R$26 à R$45"
          variant="small"
        />

        <Button
          onClick={() => alert("Teste")}
          text="R$46 ou mais"
          variant="small"
        />
        <Button
          onClick={() => alert("Teste")}
          text="Finalizar compra"
          variant="small"
        />
        <PriceLabel text="R$ 18,00" />
        <br />
        <ProductNameLabel text="Refri Coca zero 350ml" />
        <br />
        <ProductDescriptionLabel text="(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)" />
        <br />
        <div>
          <ProductImage src={imageSVG} alt={"Image svg"} />
        </div>
      </div>
    </div>
  );
}

export default App;
