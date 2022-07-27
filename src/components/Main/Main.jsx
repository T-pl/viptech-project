import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { Products } from "../Products/Products";
import './main.css'
import api from "../../services/api";

export function Main(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await api.get("/product");
      setProducts(data)
    }
    // setProducts.filter((products) => products.id !== id)

    getProduct();
  }, [])

  return (

    <main>
      <div className="intro">
        <h2 className="titleProduct">Produtos</h2>
        <Button className="btn-adc" />
      </div>
      <ul aria-labelledby="list-heading">
        {products.map((item) => {
          return <Products
            products={item}
            key={item.id}
          />
        })}
      </ul>
    </main>
  );
}