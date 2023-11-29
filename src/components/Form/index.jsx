import { Button } from '../Button'
import './style.css'

const Form = () => {
  return (
    <div className='container-form' >
        <form >
            <h3>Testemunhos</h3>
            <span>Se você já participou do nosso retiro, deixe aqui o seu testemunho para ajudar outras vidas a serem transformadas.</span>
            <input type="email" placeholder='Digite o seu email'/>
            <textarea type='text' placeholder='Deixe o seu comentário' />
            <Button buttonStyle={'btn--outline'} buttonSize={'btn--large'} type='submit'> Enviar Agora </Button>
        </form>
        <div>
            <ul>
                <li>
                    <img src="" alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Form
