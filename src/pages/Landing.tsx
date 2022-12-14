
import LandingIMG from '../assets/landingpage.png'
import ArrowBlueSVG from '../assets/arrowblue.svg'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';

export function Landing () {
  const navigate = useNavigate()
  const handleClick = () => navigate('/signup');
  return (
    <>
      <img src={LandingIMG} width="100%" />
      <div style={{position: 'absolute', top: '560px', left: '240px', transform: 'scale(1.5)'}}>
        <Button onClick={handleClick} style={{background: '#fff', color: '#1439C3'}}>Cadastre-se <img src={ArrowBlueSVG} width='12' height='12' style={{alignSelf: 'center'}} /></Button>
      </div>
    </>
  )
}
