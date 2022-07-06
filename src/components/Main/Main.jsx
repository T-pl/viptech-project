import { Button } from "../Button/Button";
import { Products } from "../Products/Products";
import './main.css'

export function Main() {
  return (
    <main>
      <div className="intro">
        <h2>Produtos</h2>
        <Button />
      </div>
      <Products />
    </main>
  );
}