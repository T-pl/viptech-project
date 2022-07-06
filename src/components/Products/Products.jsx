import './products.css'
import imgPro from '../../assets/images/m-direita.svg'
export function Products() {
  return (
    <div className="products">
      <div className="infoProducts">
        <img src={imgPro} alt="" />
        <div className="dadosProd">
          <h2>Camera</h2>
          <p>Intelbras</p>
          <p>300</p>
          <p>Cor: Branco</p>
        </div>

      </div>

    </div>
  );
}