import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../assets/images/logo-viptech.svg'

export function Header() {
  return (
    <header>
      <Link to="/" className='homeLink'>
        <img src={logo} alt="Logo Viptech" />
      </Link>
    </header>
  );
}