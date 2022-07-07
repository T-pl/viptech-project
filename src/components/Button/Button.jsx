import './button.css'
import addIcon from '../../assets/images/coolicon.png'

export function Button() {
  return (
    <a href="#" title="btnAdd" className="btn-add"> <img src={addIcon} alt="Icone +" /> Adicionar Produtos</a>
  );

}