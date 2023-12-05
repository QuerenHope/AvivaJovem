import { useState } from 'react';
import { toast } from 'react-toastify';
import './style.css'
import Testemunhos from './Testemunhos';

const Formulario = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('E-mail enviado com sucesso!');
        console.log('email enviado')
      } else {
        toast.error('Erro ao enviar e-mail. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error('Erro ao enviar e-mail. Por favor, tente novamente.');
    }
  };

  return (
    <>
    <div className='container-form'>
    <form  onSubmit={handleSubmit}>
        <h3>Testemunhos</h3>
        <span>Se você já participou do nosso retiro, deixe aqui o seu testemunho para ajudar outras vidas como seu testemunho</span>
        <input
          type="email"
          name="email"
          placeholder='Digite o seu e-mail'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder='Digite o seu comentário'
          value={formData.message}
          onChange={handleChange}
        />
      <button type="submit">ENVIAR AGORA</button>
    </form>
    </div>
    <div className='container-coment'>
        <Testemunhos />
        <Testemunhos />
        <Testemunhos />
        <Testemunhos />
        <Testemunhos />
        <Testemunhos />
        <Testemunhos />


    </div>
    </>
  );
};

export default Formulario;
