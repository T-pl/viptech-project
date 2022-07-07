import './products.css'
import imgPro from '../../assets/images/m-direita.svg'

export function Products() {
  return (
    <div className="products">
      <div className="infoProducts">
        <img src={imgPro} alt="" />
        <div className="dataProd">
          <span className='titleProd'>Câmera interna inteligente Wi-Fi Full HD iM3</span>
          <span>Intelbras</span>
          <span>300</span>
          <span>Cor: Branco</span>
        </div>

      </div>
      <div className="crudProd">
      </div>

    </div>
  );
}