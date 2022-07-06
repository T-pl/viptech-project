import './button.css'
import addIcon from '../../assets/images/coolicon.png'

export function Button() {
  return (
    <button className="btn-add"> <img src={addIcon} alt="Icone +" /> Adicionar Produtos</button>
  );

}