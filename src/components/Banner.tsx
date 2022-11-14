import classnames from 'classnames'
import './Banner.css';
import { Container } from './Container';

import ConfettiIMG from '../assets/confetti.png';

const BannerClass = classnames({
  Banner: true
})

interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Banner (props: BannerProps) {
  const {children, ...rest} = props;
  return (
    <div className={BannerClass} {...rest}>
      <div className='cheerleading'></div>
      <div className='gradient'>
        <Container>
          <h2>Basta escolher e concorrer!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </Container>
      </div>
      <div className='confetti'>
        <img src={ConfettiIMG} />
      </div>
    </div>
  )
}
