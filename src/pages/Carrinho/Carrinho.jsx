import { Header } from "../../components/Header/Header";
import imgPro from '../../assets/images/m-direita.svg'
import './carrinho.css'
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { CartCounter } from "../../components/CartCounter/CartCounter";
import { Dataitem } from "../../components/Dataitem/Dataitem";

export function Carrinho() {
  // const notas = [200, 100, 50, 20, 10, 5, 2, 1]; Será utilizada para a lógica de contagem de notas
  const [contador, setContador] = useState(1);
  function adicionar() {
    setContador(contador + 1);
  }
  function subtrair() {
    setContador(contador - 1);
  }

  // function displayCheck() {
  //   const showCheck = document.getElementById("test");
  //   showCheck.style.display = 'flex';
  // }


  return (

    <>
      <Helmet title="Carrinho - Loja Viptech" />
      <Header />
      <main>
        <span className="pathRoute" >Home &gt; Carrinho</span>
        <div className="intro">
          <h2 className="titleProduct">Carrinho</h2>
          <h2 className="titleProduct">Resumo do Pedido</h2>
        </div>
        <div className="secaoCarrinhoFinalizar">
          <div className="secaoCarPro">
            <div className="carProduct">
              <img src={imgPro} alt="" />
              <div className="infoProduct">
                <Dataitem />
              </div>
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