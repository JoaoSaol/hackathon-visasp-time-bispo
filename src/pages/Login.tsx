import { Link } from 'react-router-dom'

import { Button } from '../components/Button'
import { Input } from '../components/Input'

import TorcidaPNG from '../assets/torcida.png'
import LogoWhiteSVG from '../assets/logowhite.svg'
import TelephoneSVG from '../assets/telephone.svg'
import LockSVG from '../assets/lock.svg'

export function Login () {
  return (
    <div style={{display: 'grid', width: '100vw', height: '100vh', gridTemplateColumns: '6fr 4fr', overflow: 'hidden'}}>
      <div>
        <img src={TorcidaPNG} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <img src={LogoWhiteSVG} style={{position: 'absolute', top: '56px', left: '160px'}} />
      </div>
      <div>
        <form style={{display: 'grid', padding: '48px', height: '100vh', alignContent: 'center', justifyContent: 'center', gap: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: '500', margin: '0'}}>Acessar minha conta</h2>
          <div style={{display: 'grid', gap: '16px'}}>
            <Input type='tel' placeholder='Número do WhatsApp' icon={TelephoneSVG} />
            <Input type='password' placeholder='Senha' icon={LockSVG} />
            <span style={{justifySelf: 'end', color: '#1439C3'}}>Esqueci minha senha</span>
          </div>
          <Button type='button'>Entrar</Button>
          <span style={{justifySelf: 'center'}}>Não possui uma conta? <Link to='/signup' style={{fontWeight: '500', textDecoration: 'underline'}}>Cadastre-se</Link></span>
        </form>
      </div>
    </div>
  );
}
