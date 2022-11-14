import './Panel.css'

import FlamengoIMG from '../assets/flamengo.png'
import ArrowBlueSVG from '../assets/arrowblue.svg'
import TicketSVG from '../assets/ticket.svg'
import VisaCard from '../assets/visacard.svg'
import MasterCard from '../assets/mastercard.svg'
import ResultsSVG from '../assets/results.svg'

import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { DateTime } from '../components/DateTime'
import { Match } from '../components/Match'
import { ButtonWithArrow } from './Deals'

const LuckyNumber = () => (
  <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
    <img src={TicketSVG} style={{alignSelf: 'center'}} /> 1.234.567
  </div>
)

export function Panel () {
  return (
    <Container style={{height: '643px'}}>
      <div className='Panel'>
        <div className='cardleft' style={{position: 'relative', overflow: 'hidden'}}>
          <img src={FlamengoIMG} width='100%' height='100%' style={{objectFit: 'cover'}} />
          <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(360deg, #1B1B1B 4.71%, rgba(27, 27, 27, 0.5) 25.03%, rgba(27, 27, 27, 0) 41.06%)'}}></div>
          <Button style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '48px', backgroundColor: '#fff', color: '#1b1b1b'}}>Quero participar <img src={ArrowBlueSVG} width='12' height='12' style={{alignSelf: 'center'}} /></Button>
          <div style={{display: 'flex', gap: '8px', justifyContent: 'center', position: 'absolute', left: 'center', bottom: '20px', width: '100%'}}>
          <div style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff'}}></div>
          <div style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff', opacity: '0.5'}}></div>
          <div style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff', opacity: '0.5'}}></div>
          </div>
        </div>
        <div className='concorrendo'>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <h3>Concorrendo</h3>
            <span style={{textDecoration: 'underline', fontSize: '12px', color: '#616FA5'}}>Ver todos</span>
          </div>
          <div style={{display: 'flex', gap: '24px', overflow: 'scroll', maxWidth: '352px', marginRight: '-24px'}}>
          <Card style={{display: 'grid', gap: '24px'}}>
            <div style={{color: '#fff', background: '#214BE8', borderRadius: '4px', padding: '4px 8px'}}>Copa do Mundo</div>
            <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
            <Match teamA='Brasil' teamB='Sérvia' />
            <ButtonWithArrow label='Ver detalhes' />
          </Card>
          <Card style={{display: 'grid', gap: '24px'}}>
            <div style={{color: '#fff', background: '#214BE8', borderRadius: '4px', padding: '4px 8px'}}>Copa do Mundo</div>
            <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
            <Match teamA='Brasil' teamB='Sérvia' />
            <ButtonWithArrow label='Ver detalhes' />
          </Card>
          </div>
        </div>
        <div className='numeros'>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <h3>Últimos números</h3>
            <span style={{textDecoration: 'underline', fontSize: '12px', color: '#616FA5'}}>Ver todos</span>
          </div>
          <div style={{display: 'grid', gap: '20px'}}>
            <LuckyNumber />
            <LuckyNumber />
            <LuckyNumber />
            <LuckyNumber />
            <LuckyNumber />
          </div>
        </div>
        <div className='cartoes'>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <h3>Meus cartões</h3>
            <span style={{textDecoration: 'underline', fontSize: '12px', color: '#616FA5'}}>Ver detalhes</span>
          </div>
          <div style={{display: 'flex', gap: '24px', overflow: 'scroll', maxWidth: '352px', marginRight: '-24px'}}>
            <img src={VisaCard} />
            <img src={MasterCard} />
          </div>
        </div>
        <div className='resultados'>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <h3>Últimos resultados</h3>
            <span style={{textDecoration: 'underline', fontSize: '12px', color: '#616FA5'}}>Ver mais</span>
          </div>
            <img src={ResultsSVG} />
        </div>
      </div>
    </Container>
  )
}
