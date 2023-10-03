import './style.css' 
import useCountdown from './useCountdown'

const Counterdate = () => {

    const [day, hour, minute, second] = useCountdown('Jul 19, 2024 00:00:00')
  
    return (
    <div className="container-counter">
        <div className="title-container">
            <h1 className="title">Estamos esperando por voce! Faltam:</h1>
        </div>
       <div className="countdown-container">
            <div className='counter'>
                <p>{day}</p>
                <span>Dias</span>
            </div>
            <div className='counter'>
                <p>{hour}</p>
                <span>Horas</span>
            </div>
            <div className='counter'>
                <p>{minute}</p>
                <span>Minutos</span>
            </div>
            <div className='counter'>
                <p>{second}</p>
                <span>Segundos</span>
            </div>
        </div>
    </div>
  )
}

export default Counterdate
