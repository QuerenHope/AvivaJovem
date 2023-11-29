import './style.css'
import logo from '../../assets/logoIgreja.svg'
import logosvg from '../../assets/logosvg.svg'

import { Button } from '../Button'
import video from '../../assets/video.mp4'


const Banner = () => {
  return (
    <div className='container'>
        <div className='banner'>
            <div className='container-title'>
                 <h1 className='title1'>Retiro </h1>
                 <h1 className='title2'> Aviva Jovem</h1>
                <span>19, 20 e 21 de Julho de 2024</span>
                <Button buttonStyle='btn--outline'>Faça sua inscrição</Button>  
                <img className='logo-igreja' src={logo} alt="logo tabernaculo em anapolis" />   
            </div>
            <img className='logo-igrejasvg' src={logosvg} alt="logo tabernaculo em anapolis" />   
        </div>
        <div className='video'>
        <video width="520" height="340" controls >
            <source src={video} type="video/mp4"/>
        </video>
        </div>
    </div>
  )
}

export default Banner
