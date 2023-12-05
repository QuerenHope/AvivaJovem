import './style.css'
import estrelas from '../../../assets/imgsTestemunhos/estrelas.svg'
import vetor from '../../../assets/imgsTestemunhos/Vector.svg'
import picture from '../../../assets/imgsTestemunhos/Picture.svg'


const Testemunhos = () => {
  return (
    <div className='container-text'>
            <div className='text'>
                <img src={vetor} alt="" />
                <p>Estou muito kjhdfkjhsdkjfhskjdhfkjshdkjfhskjdhfjkshdjkfhsdjkfh feliz em testemunhar a minha bençao nesse retiro aviva jovem fui muito abençoada em cada monento que estive ali </p>
                <img src={estrelas} alt="" />
            </div>
            <div className='img-text'>
                <img src={picture} alt="" />
                <h4>Fulano de Tal</h4>
                <span>Cidade-estado</span>
            </div>
        </div>
  )
}

export default Testemunhos
