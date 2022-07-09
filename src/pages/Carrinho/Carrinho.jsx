import { Header } from "../../components/Header/Header";
import imgPro from '../../assets/images/m-direita.svg'
import './carrinho.css'
export function Carrinho() {
  return (
    <>
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
                <span className='titleProd'>Câmera interna</span>
                <span>Intelbras</span>
                <span>Cor: Branco</span>
              </div>
            </div>
            <hr className="divider" />
            <div className="quantValor">
              <div className="quantidade">
                <span>Quantidade:</span>
              </div>
              <div className="valor">
                R$: 300
              </div>
            </div>
          </div>
          <div className="resumoPedido">
            TESTE TESTE
          </div>
        </div>

      </main>

    </>
  );
}