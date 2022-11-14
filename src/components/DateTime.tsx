import classnames from 'classnames'
import './DateTime.css';

const DateTimeClass = classnames({
  DateTime: true
})

interface DateTimeProps extends React.TimeHTMLAttributes<HTMLTimeElement> {
  day: string;
  month: string;
  year: string;
  hour: string;
  minutes: string;
}

export function DateTime (props: DateTimeProps) {
  const {day, month, year, hour, minutes} = props;
  const date = new Date(`${year}-${month}-${day} ${hour}:${minutes}`)
  const weekday = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'][date.getDay()];
  return (
    <time className={DateTimeClass} dateTime={date.toISOString()}>
      <span className='date'>{`${day}/${month} (${weekday})`}</span>
      <span className='dot'>•</span>
      <span className='time'>{`${hour}:${minutes}h`}</span>
    </time>
  )
}
