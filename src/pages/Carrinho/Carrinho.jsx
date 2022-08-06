/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../components/Header/Header";
import imgPro from '../../assets/images/m-direita.svg'
import './carrinho.css'
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { CartCounter } from "../../components/CartCounter/CartCounter";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import imgfrete from '../../assets/images/iconinfo.svg'
import { Link } from "react-router-dom";
// import { products } from "../../components/products/products";

export function Carrinho(props) {
  const [contador, setContador] = useState(1);
  const [displayCountNotes, setTest] = useState([]);

  function adicionar() {
    setContador(contador + 1);
  }
  function subtrair() {
    setContador(contador - 1);
  }

  function displayCheck() {
    const showCheck = document.getElementById("test");
    const btnbackground = document.getElementById("btncheckPag");
    btnbackground.style.background = "#D9D9D9";
    btnbackground.style.cursor = "not-allowed";
    showCheck.style.opacity = '1';

    const valoresNotas = [200, 100, 50, 20, 10, 5, 2, 1];
    const numeroDeNotas = new Array(valoresNotas.length).fill(0);
    let valorTotalNotas = total;

    valoresNotas.forEach((valor, index) => {
      if (valorTotalNotas >= valor) {
        numeroDeNotas[index] = { valor, numeroDeNotas: parseInt(valorTotalNotas / valor) };
        valorTotalNotas = valorTotalNotas - (valor * numeroDeNotas[index].numeroDeNotas)
      }
      console.log(valorTotalNotas, valor)
      if (valorTotalNotas === 0) {
        return;
      }
    })
    setTest(numeroDeNotas)
  }

  const [productData, setProductData] = useState([]);
  const parametros = useParams();
  useEffect(() => {
    const getProductData = async () => {
      const { data } = await api.get(`/product/${parametros.id}`);
      setProductData(data)
      console.log(data)
    }
    getProductData();
  }, [])

  const subTotal = contador * productData.price;
  const frete = subTotal * 0.10;
  const total = subTotal + frete;

  // eslint-disable-next-line no-empty

  return (

    <>
      <Helmet title="Carrinho - Loja Viptech" />
      <Header />
      <main>
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Adicionar Produtos</span>
        <div className="intro">
          <h2 className="titleProduct">Carrinho</h2>
          <h2 className="titleProduct resumeTitle">Resumo do Pedido</h2>
        </div>
        <div className="secaoCarrinhoFinalizar">
          <div className="secaoCarPro">
            <div className="carProduct">
              <img src={productData.image} alt="Imagem do Produto" />
              <div className="infoCartProd">
                <span className='titleProd'>{productData.name}</span>
                <span className='marca'>{productData.brand}</span>
                <span className='color'>{productData.color}</span>
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
                <span>R$: {subTotal},00</span>
              </div>
            </div>
          </div>
          <div className="caixaResumo">
            <div className="resumoPedido">
              <div className="subtotal">
                <span className="inforesumo">Subtotal ({contador} {contador > 1 ? 'itens' : 'item'})</span>
                <span className="inforesumo">R$ {subTotal}</span>
              </div>
              <hr className="divider" />
              <div className="subtotal">
                <span className="inforesumo infoFrete">Frete <img className="infoIcon" src={imgfrete} alt="informacoes icone" title="O Frete é 10% do valor do produto." />  </span>
                <span className="inforesumo">R$ {frete}</span>
              </div>
              <hr className="divider" />
              <div className="subtotal">
                <span className="inforesumo">Valor Total</span>
                <span className="inforesumo">R$ {total}</span>
              </div>
              <button id="btncheckPag" onClick={displayCheck} className="pagar">Pagar</button>
            </div>
          </div>
        </div>
        <div id="test" className="checkPag">
          <h2>Pagamento realizado com Sucesso!</h2>
          <p>Este pagamento foi realizado com:</p>
          {displayCountNotes.map((item) => {
            if (item) {
              return <div> <span>{item.numeroDeNotas}{item.numeroDeNotas > 1 ? ' Cédulas' : ' Cédula'}  de  R$ {item.valor},00</span></div>
            }
            return (null)
          })}
        </div>

      </main>
    </>
  );
}