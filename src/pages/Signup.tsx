import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'
import { Input } from '../components/Input'

import TorcidaPNG from '../assets/torcida.png'
import LogoWhiteSVG from '../assets/logowhite.svg'
import TelephoneSVG from '../assets/telephone.svg'
import LockSVG from '../assets/lock.svg'
import NameSVG from '../assets/name.svg'
import CpfSVG from '../assets/cpf.svg'

export function Signup () {

  const navigate = useNavigate();

  const handleClick = () => navigate('/meu-painel');

  return (
    <div style={{display: 'grid', width: '100vw', height: '100vh', gridTemplateColumns: '6fr 4fr', overflow: 'hidden'}}>
      <div>
        <img src={TorcidaPNG} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <Link to='/'>
          <img src={LogoWhiteSVG} style={{position: 'absolute', top: '56px', left: '160px'}} />
        </Link>
      </div>
      <div>
        <form style={{display: 'grid', padding: '48px', height: '100vh', alignContent: 'center', justifyContent: 'center', gap: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: '500', margin: '0'}}>Cadastrar minha conta</h2>
          <div style={{display: 'grid', gap: '16px'}}>
            <Input type='text' placeholder='Nome Completo' icon={NameSVG} />
            <Input type='tel' placeholder='Número do WhatsApp' icon={TelephoneSVG} />
            <Input type='text' placeholder='CPF' icon={CpfSVG} />
            <Input type='password' placeholder='Senha' icon={LockSVG} />
          </div>
          <Button type='button' onClick={handleClick}>Cadastrar</Button>
          <span style={{justifySelf: 'center'}}>Já possui uma conta? <Link to='/login' style={{fontWeight: '500', textDecoration: 'underline'}}>Entre</Link></span>
        </form>
      </div>
    </div>
  );
}
