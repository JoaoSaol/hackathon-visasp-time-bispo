import classnames from 'classnames'
import './Button.css';

const ButtonClass = classnames({
  Button: true
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button (props: ButtonProps) {
  const {children, ...rest} = props;
  return (<button className={ButtonClass} {...rest}>{children}</button>)
}
