import './products.css'
import imgPro from '../../assets/images/m-direita.svg'
import carrinho from '../../assets/images/carrinho.svg'
import edit from '../../assets/images/edit.svg'
import delet from '../../assets/images/delete.svg'

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
        <ul className='actionList'>
          <li > <img className="iconTest" src={carrinho} alt="Carrinho de Compras" /> </li>
          <li> <img src={edit} alt="Icone Editar" /> </li>
          <li> <img src={delet} alt="" /> </li>
        </ul>
      </div>

    </div>
  );
}