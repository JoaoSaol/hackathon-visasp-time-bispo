import BrasilSVG from '../assets/flag-brazil.svg'
import CameroonSVG from '../assets/flag-cameroon.svg'
import SerbiaSVG from '../assets/flag-serbia.svg'
import SwitzerlandSVG from '../assets/flag-switzerland.svg'

interface FlagProps {
  team: string;
}

export function Flag (props: FlagProps) {
  switch(props.team) {
    case 'Brasil':
      return <img src={BrasilSVG} />
    case 'Camarões':
      return <img src={CameroonSVG} />
    case 'Sérvia':
      return <img src={SerbiaSVG} />
    case 'Suíça':
      return <img src={SwitzerlandSVG} />
    default:
      return null
  }
}
