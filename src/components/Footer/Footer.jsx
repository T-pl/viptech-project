import logo from '../../assets/images/logo-viptech.svg'
import './footer.css'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="Logo Viptech" />
      </div>
      <div className="contato">
        <h2>Contato</h2>
        <ul>
          <li>
            <PhoneInTalkOutlinedIcon className='iconsMui' />
            São Paulo/SP: (11) 94945-0029
          </li>
          <li>
            <PhoneInTalkOutlinedIcon className='iconsMui' />
            Campo Mourão/PR: (44) 3518-3315
          </li>
          <li>
            <PhoneInTalkOutlinedIcon className='iconsMui' />
            Maringá/PR: (44) 99957-6054
          </li>
          <li>
            <PhoneInTalkOutlinedIcon className='iconsMui' />
            Recife/PE: (44) 9860-0758
          </li>
          <li>

          </li>
        </ul>
      </div>

      <div className="redesSociais">
        <h2>Siga-nos nas redes sociais</h2>
        <ul className='socialMedias'>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
}