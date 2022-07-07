import { Button } from "../Button/Button";
import { Products } from "../Products/Products";
import './main.css'

export function Main() {
  return (
    <main>
      <div className="intro">
        <h2 className="titleProduct">Produtos</h2>
        <Button />
      </div>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </main>
  );
}