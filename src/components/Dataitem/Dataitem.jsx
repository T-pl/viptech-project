import './dataitem.css'

export function Dataitem(props) {
  return (
    <div className="dataProd">
      <span id={props.id} className='titleProd'>Câmera interna inteligente Wi-Fi Full </span>
      <span id={props.name} className='marca'>Intelbras</span>
      <div className="valores">
        <span >R&#36;: </span>
        <span >300&#44;00  </span>
      </div>
      <span className='color'>Cor: Branco</span>
    </div>
  );
}