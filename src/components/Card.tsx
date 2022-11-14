import classnames from 'classnames'
import './Card.css'

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const CardClass = classnames({
  Card: true
})

export function Card (props: CardProps) {
  const {children, ...rest} = props;
  return (<div className={CardClass} {...rest}>{children}</div>)
}
