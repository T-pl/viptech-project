import './header.css'
import logo from '../../assets/images/logo-viptech.svg'

export function Header() {
  return (
    <header>
      <a href="#" className='homeLink'>
        <img src={logo} alt="Logo Viptech" />
      </a>
    </header>
  );
}