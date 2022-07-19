import './products.css'
import imgPro from '../../assets/images/m-direita.svg'
import carrinho from '../../assets/images/carrinho.svg'
import edit from '../../assets/images/edit.svg'
import delet from '../../assets/images/delete.svg'
import { Link } from 'react-router-dom'
import { Dataitem } from '../Dataitem/Dataitem'

export function Products() {
  function checkDelet(e) {
    e.preventDefault();
    alert('Tem certeza que deseja excluir o Produto?')
  }
  return (
    <li>
      <div className="products">
        <div className="infoProducts">
          <img src={imgPro} alt="" />
          <Dataitem />
        </div>
        <div className="crudProd">
          <ul className='actionList'>
            <li > <Link exact to="/carrinho"><img className="iconCar" src={carrinho} alt="Carrinho de Compras" /></Link> </li>
            <li> <Link exact to="/editar"><img className="iconEdit" src={edit} alt="Icone Editar" /> </Link> </li>
            <li> <button className='btnDelete' onClick={checkDelet}> <img src={delet} alt="Icone Deletar" className='iconDelete' /></button> </li>
          </ul>
        </div>
      </div>
    </li>
  );
}