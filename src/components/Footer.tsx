import classnames from 'classnames'
import './Footer.css'

import { Container } from './Container'
import InstagramSVG from '../assets/instagram.svg'
import TwitterSVG from '../assets/twitter.svg'
import WhatsappSVG from '../assets/whatsapp.svg'

const FooterClass = classnames({
  Footer: true
})

export function Footer () {
  return (
    <footer className={FooterClass}>
      <Container>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Todos os direitos reservados. 2022.</span>
          <div style={{display: 'flex', gap: '16px'}}>
            <span><img src={InstagramSVG} width='24' height='24' style={{alignSelf: 'center'}} /></span>
            <span><img src={TwitterSVG} width='24' height='24' style={{alignSelf: 'center'}} /></span>
            <span><img src={WhatsappSVG} width='24' height='24' style={{alignSelf: 'center'}} /></span>
            </div>
        </div>
      </Container>
    </footer>
  )
}
