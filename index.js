const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());

//let cartoes = []

const vetor = [
    {mensagem: 'oi', numero: 0 },
    {mensagem: 'ola', numero: 1 },
    {mensagem: 'hi', numero: 2 },
    {mensagem: 'hello', numero: 3 },
]

app.post('/falas', (req, res) => {
    const mensagem = req.mensagem;
    console.log(mensagem);
    res.status(201).json({ mensagem: 'funfo' });
});

app.get('/falas', (req, res) => {
    res.status(200).json({ vetor });
    console.log('oi');

})

app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'Olá Mundo!' });
    console.log('Oi');
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});