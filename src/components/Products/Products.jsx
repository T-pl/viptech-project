import './products.css'
import imgPro from '../../assets/images/m-direita.svg'
import carrinho from '../../assets/images/carrinho.svg'
import edit from '../../assets/images/edit.svg'
import delet from '../../assets/images/delete.svg'
import { Link } from 'react-router-dom'

export function Products() {
  function checkDelet(e) {
    e.preventDefault();
    alert('Tem certeza que deseja excluir o Produto?')
  }
  return (
    <div className="products">
      <div className="infoProducts">
        <img src={imgPro} alt="" />
        <div className="dataProd">
          <span className='titleProd'>Câmera interna inteligente Wi-Fi Full HD iM3</span>
          <span className='marca'>Intelbras</span>
          <span className='valor'>R&#36; <span className='valor'>300&#44;00  </span></span>
          <span className='color'>Cor: Branco</span>
        </div>

      </div>
      <div className="crudProd">
        <ul className='actionList'>
          <li > <Link exact to="/carrinho"><img className="iconCar" src={carrinho} alt="Carrinho de Compras" /></Link> </li>
          <li> <Link exact to="/editar"><img className="iconEdit" src={edit} alt="Icone Editar" /> </Link> </li>
          <li> <button className='btnDelete' onClick={checkDelet}> <img src={delet} alt="Icone Deletar" className='iconDelete' /></button> </li>
        </ul>
      </div>

    </div>
  );
}