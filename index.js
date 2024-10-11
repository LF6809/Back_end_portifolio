const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());



//const vetor = [
  //  {mensagem: 'oi', numero: 0 },
    //{mensagem: 'ola', numero: 1 },
    //{mensagem: 'hi', numero: 2 },
    //{mensagem: 'hello', numero: 3 },
//]

let produtos = [
   {
       nome: 'cordas 1',
        valor: 'R$48,89',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf-kbQA8498ZcThY_nyRpJ5y_MLcGpt_ZQA&s'
},
   {
        nome: 'cordas 2',
       valor: 'R$99,90',
        imagem: 'https://imageswscdn.wslojas.com.br/files/3196/MED_encordoamento-strinberg-sb-50-p-contrabaixo-eletrico-5-cordas-292596.jpg'
   },
    {
        nome: 'cordas 3',
        valor: 'R$75,80',
        imagem: 'https://images.tcdn.com.br/img/img_prod/640308/180_encord_strinberg_c_baixo_ba5_acustico_27965_1_1cd9f625e3b549d9342130674f6b3c3f.jpg'
    },
    {
        nome: 'cordas 4',
        valor: 'R$80,00',
        imagem: 'https://images.tcdn.com.br/img/img_prod/1028655/jogo_de_cordas_contrabaixo_eletrico_5_cordas_mp_044_125_221_1_44263d51c9b53111fd6d1f1dbd10a121.jpg'
    },
    {
        nome: 'cordas 5',
        valor: 'R$68,00',
        imagem: 'https://down-br.img.susercontent.com/file/53f3408b74a52160222ff3bb815ddd45'
    }
];

app.post('/produtos', (req, res) => {
    const{nome , valor , imagem} = req.body;

    produtos.push({nome: nome, valor: valor, imagem: imagem});
    console.log(produtos);
    res.status(201).json({ mensagem: 'funfo' });
});

app.get('/produtos', (req, res) => {
    res.status(200).json({ produtos });
    console.log('oi');

})

app.delete('/produtos', (req,res) => {
    const {cartao} = req.body;
    cartoes.splice(cartao, 1);
    console.log(cartao + 'deletado');
    res.status(201).json({mensagem: 'funfo o delete' + cartao});
});

app.put('/produtos', (req, res) => {
    const numero = req.body.numero
    const mensagem = req.body.mensagem
    vetor[numero].mensagem = mensagem
    console.log(vetor)
    res.status(201).json({ mensagem: 'funfo o put' })
})

app.get('/produtos', (req, res) => {
    res.status(200).json({ mensagem: 'Olá Mundo!' });
    console.log('Oi');
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});