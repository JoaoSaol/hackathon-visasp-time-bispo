import classnames from 'classnames'
import './Container.css';

const ContainerClass = classnames({
  Container: true
})

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Container (props: ContainerProps) {
  const {children, ...rest} = props;
  return (<div className={ContainerClass} {...rest}>{children}</div>)
}
