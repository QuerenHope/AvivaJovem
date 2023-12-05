import express from 'express';
import pkg from 'body-parser';
import cors from 'cors'
import nodemailer from 'nodemailer'

const {json} = pkg;

const app = express();
const port = 3001;

// Middleware para analisar JSON
app.use(json());
app.use(cors())

// Rota de exemplo
app.post('/api/enviar-email', async (req, res) => {
    const { email, message } = req.body;
  
    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'outlook', // Exemplo: 'gmail'
      auth: {
        user: 'querenhope@hotmail.com',
        pass: 'martuscelli123',
      },
    });
  
    // Configuração do email
    const mailOptions = {
      from: 'querenhope@hotmail.com',
      to: email,
      subject: 'INCRIÇÂO AVIVA JOVEM',
      text: message,
    };
  
    try {
      // Envio do email
      await transporter.sendMail(mailOptions);
      console.log('Email enviado com sucesso!');
      res.status(200).json({ mensagem: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      res.status(500).json({ erro: 'Erro ao enviar o email. Tente novamente mais tarde.' });
    }
  });

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
