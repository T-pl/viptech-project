import { Header } from "../../components/Header/Header";
import imgPro from '../../assets/images/m-direita.svg'
import './carrinho.css'
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useParams } from "react";
import { CartCounter } from "../../components/CartCounter/CartCounter";
// import api from "../../services/api";
// import { Products } from "../../components/Products/Products";

export function Carrinho(props) {
  const [contador, setContador] = useState(1);
  function adicionar() {
    setContador(contador + 1);
  }
  function subtrair() {
    setContador(contador - 1);
  }
  // const [disable, setDisable] = useState(false);
  // function displayCheck() {
  //   const showCheck = document.getElementById("test");
  //   showCheck.style.display = 'flex';
  //   console.log('button clicked');

  // }

  // const [products, setProducts] = useState([]);
  // const parametros = useParams();
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const { data } = await api.get(`product/carrinho/${parametros.id}`);
  //     setProducts(data)
  //     console.log(data)
  //   }
  //   getProduct();
  // }, [])


  return (

    <>
      <Helmet title="Carrinho - Loja Viptech" />
      <Header />
      <main>
        <span className="pathRoute" >Home &gt; Carrinho</span>
        <div className="intro">
          <h2 className="titleProduct">Carrinho</h2>
          <h2 className="titleProduct resumeTitle">Resumo do Pedido</h2>
        </div>
        <div className="secaoCarrinhoFinalizar">
          <div className="secaoCarPro">
            <div className="carProduct">
              <img src={imgPro} alt="" />
              {/* <Products
                name={products.name}
                brand={products.brand}
                color={products.color}
              /> */}
            </div>
            <hr className="divider" />
            <div className="quantValor">
              <div className="quantidade">
                <span>Quantidade:</span>
                <div className="counter">
                  <button disabled={contador <= 1} onClick={subtrair}>-</button>
                  <div className="displayCounter">
                    <CartCounter
                      contador={contador}
                      onChange={e => setContador(e.target.value)}
                    />
                  </div>
                  <button onClick={adicionar}>+</button>
                </div>
              </div>
              <div className="valor">
                <span>R$: 300</span>
              </div>
            </div>
          </div>
          <div className="caixaResumo">
            <div className="resumoPedido">
              <div className="subtotal">
                <span className="inforesumo">Subtotal</span>
                <span className="inforesumo">R$ 300</span>
              </div>
              <hr className="divider" />
              <div className="subtotal">
                <span className="inforesumo">Frete</span>
                <span className="inforesumo">R$ 30</span>
              </div>
              <hr className="divider" />
              <div className="subtotal">
                <span className="inforesumo">Valor Total</span>
                <span className="inforesumo">R$330</span>
              </div>
              <button className="pagar">Pagar</button>
            </div>
            <div id="test" className="checkPag">
              <h2>Pagamento realizado com Sucesso!</h2>
              <span>Este pagamento foi realizado com:</span>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}