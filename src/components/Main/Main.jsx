import { Button } from "../Button/Button";
import { Dataitem } from "../Dataitem/Dataitem";
import { Products } from "../Products/Products";
import './main.css'

export function Main(props) {


  return (

    <main>
      <div className="intro">
        <h2 className="titleProduct">Produtos</h2>
        <Button />
      </div>
      <ul aria-labelledby="list-heading">
        <Products />
      </ul>
    </main>
  );
}