import './style.css'
import icon from '../../assets/icon.svg'
import { Button } from '../Button'

const About = () => {
  return (
    <div className='containerSobre'>
        <div className='sobre'>
            <h2>Sobre</h2>
            <p><img src={icon} alt="" /> O Retiro Espiritual Aviva Jovem, da Igreja Tabernáculo em Anápolis, além de proporcionar um descanso físico e mental, tem o objetivo de promover companheirismo e fortalecer espiritualmente os *nossos* jovens.</p>
            <p><img src={icon} alt="" /> Dirigido pelo Pastor Mauro Cardoso, o Aviva Jovem tem transformado vidas e promovendo uma experiência real com Deus.</p>
            <p><img src={icon} alt="" /> Realizado há vários anos, o evento acontece no Acampamento El Rancho, em Corumbá de Goiás, com duração de três dias e já se tornou tradicional entre os jovens da Mensagem no Brasil.</p>       
        </div>
            <Button buttonStyle='btn--primary'>Saiba mais</Button>
    </div>
  )
}

export default About
