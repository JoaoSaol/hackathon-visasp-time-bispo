import { Flag } from './Flag'

interface MatchProps {
  teamA: string;
  teamB: string;
}

export function Match (props: MatchProps) {
  const {teamA, teamB} = props;
  return (
    <div style={{display: 'flex', gap: '8px'}}>
      <Flag team={teamA} />
      <span style={{fontSize: '18px'}}>{teamA}</span>
      <span>x</span>
      <span style={{fontSize: '18px'}}>{teamB}</span>
      <Flag team={teamB} />
    </div>
  )
}
