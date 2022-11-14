import classnames from 'classnames'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { DateTime } from '../components/DateTime'
import { Match } from '../components/Match'
import ArrowSVG from '../assets/arrow.svg'
import ArrowBlueSVG from '../assets/arrowblue.svg'
import WorldCupSVG from '../assets/worldcup.svg'
import EsportsSVG from '../assets/esports.svg'
import FormulaOneSVG from '../assets/formulaone.svg'
import SoccerSVG from '../assets/soccer.svg'
import OlympicsSVG from '../assets/olympics.svg'
import './Deals.css'

export const ButtonWithArrow = (props: {label: string}) => (
    <Button style={{display: 'flex', gap: '12px'}}>
      <span>{props.label}</span>
      <img src={ArrowSVG} width='12' height='12' style={{alignSelf: 'center'}} />
    </Button>
)

const DealsClass = classnames({
  Deals: true
})

export function Deals () {
  return (
    <div className={DealsClass}>
      <Banner />
      <Container style={{ display: 'grid' }}>
        <h2 className='title'>Diversas oportunidades para você realizar o seu grande sonho</h2>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', color: '#616FA5'}}>
            <div className='tab active'><img src={WorldCupSVG} width='16' height='16' style={{alignSelf: 'center'}} /> Copa do Mundo</div>
            <div className='tab'><img src={EsportsSVG} width='16' height='16' style={{alignSelf: 'center'}} /> E-sports</div>
            <div className='tab'><img src={FormulaOneSVG} width='16' height='16' style={{alignSelf: 'center'}} /> Formula1</div>
            <div className='tab'><img src={SoccerSVG} width='16' height='16' style={{alignSelf: 'center'}} /> Futebol</div>
            <div className='tab'><img src={OlympicsSVG} width='16' height='16' style={{alignSelf: 'center'}} /> Olimpíadas</div>
          </div>
          <div style={{display: 'flex', gap: '8px', alignItems: 'center', color: '#616FA5'}}>
            <span>Ver mais</span>
            <img src={ArrowBlueSVG} width='12' height='12' style={{alignSelf: 'center'}} />
          </div>
        </div>
        <div style={{display: 'flex', gap: '16px', background: '#F2F3F5', padding: '32px', borderRadius: '0 16px 16px 16px'}}>
          <div style={{width: '170px', display: 'grid', gap: '8px', alignContent: 'start'}}>
            <div style={{fontSize: '20px', fontWeight: '400'}}>Próximos Jogos</div>
            <div style={{fontSize: '16px', fontWeight: '300'}}>Primeira Rodada</div>
          </div>
          <div style={{display: 'flex', gap: '24px', overflow: 'scroll', maxWidth: '958px', marginRight: '-32px'}}>
            <Card style={{display: 'grid', gap: '24px'}}>
              <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
              <Match teamA='Brasil' teamB='Sérvia' />
              <ButtonWithArrow label='Concorrer' />
            </Card>
            <Card style={{display: 'grid', gap: '24px'}}>
              <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
              <Match teamA='Brasil' teamB='Suíça' />
              <ButtonWithArrow label='Concorrer' />
            </Card>
            <Card style={{display: 'grid', gap: '24px'}}>
              <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
              <Match teamA='Brasil' teamB='Camarões' />
              <ButtonWithArrow label='Concorrer' />
            </Card>
            <Card style={{display: 'grid', gap: '24px'}}>
              <DateTime day='24' month='11' year='2022' hour='15' minutes='00'></DateTime>
              <Match teamA='Brasil' teamB='Sérvia' />
              <ButtonWithArrow label='Concorrer' />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
