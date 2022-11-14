import classnames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';

import { Container } from './Container'

import LogoSVG from '../assets/logo.svg'
import NotificationsSVG from '../assets/notifications.svg'
import AccountSVG from '../assets/account.svg'
import LogoutSVG from '../assets/logout.svg'

const HeaderClass = classnames({
  Header: true
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  isLogged?: boolean;
}

export function Header (props: HeaderProps) {
  const {children, isLogged, ...rest} = props;
  return (
    <header className={HeaderClass} {...rest}>
      <Container>
        <div className='navbar'>
          <Link to='/'>
            <img src={LogoSVG} width='164' height='36' />
          </Link>
          <nav>
            <ul className='navigation'>
              <li><NavLink to='/meu-painel'>Meu Painel</NavLink></li>
              <li><NavLink to='/promocoes-ativas'>Promoções Ativas</NavLink></li>
            </ul>
          </nav>
          <div style={{flex: '1'}}></div>
          <span style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
            <img src={NotificationsSVG} width='32' height='32' style={{alignSelf: 'center'}} />
            <img src={AccountSVG} width='32' height='32' style={{alignSelf: 'center'}} />
            <div className='divisor'>|</div>
            <div style={{display: 'flex', gap: '8px'}}>
              <span style={{color: '#616FA5'}}>Sair da conta</span>
              <img src={LogoutSVG} width='16' height='16' style={{alignSelf: 'center'}} />
            </div>
          </span>
        </div>
      </Container>
    </header>
  )
}
