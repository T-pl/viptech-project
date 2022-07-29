import logo from '../../assets/images/logo-viptech.svg'
import './footer.css'
export function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="Logo Viptech" />
      </div>
      <div className="contato">CONTATO</div>
      <div className="redesSociais">REDES SOCIAIS</div>
    </footer>
  );
}