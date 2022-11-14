import classnames from 'classnames'
import './Input.css';

const InputClass = classnames({
  Input: true
})

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string
}

export function Input (props: InputProps) {
  const {icon, ...rest} = props;
  return (
    <div className={InputClass}>
      <img className='icon' src={icon} />
      <input {...rest} />
    </div>
  )
}
