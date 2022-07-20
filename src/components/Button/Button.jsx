import { Link } from 'react-router-dom';
import './button.css'
import addIcon from '../../assets/images/coolicon.png'

export function Button() {
  return (
    <Link to="/addproduct" href="#" title="Botão Adicionar Produto" className="btn-add"> <img src={addIcon} alt="Icone +" /> Adicionar Produtos</Link>
  );

}