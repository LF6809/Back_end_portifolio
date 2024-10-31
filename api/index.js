const express = require('express');
const cors = require('cors');
const admin = require("firebase-admin");

const config = {
    type: "service_account",
    project_id: "bdtestep",
    private_key_id: "e9aab94283005354a14840bd5a271bbc2998eaa5",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKCdZUmQrthRRQ\ne5GpI/SULM8r3ij13ujakDtLMy+1X2o5NFzQg9X7OkKREDIcBiJ7cWHMCaIwMDg3\njVqH1YQuouFi96ug8uEsP1bVmb5AN3l55Oa0AdfZaZNHsW3LQVdZuwCvA20yvDxS\n3q39B3DxRBTvlIy2GqJTq2T/geTmvUBi3sKhyts/QXz6LzB9wGDZQ7S9YEsi96W7\nQTsSHJQnM4AeeA54GvZXtF3+RKjwfglswSJ3FNh5t9L+Lg8JrjSuU8mlBcUkqNKJ\ngu0pfhaBobqcIj4lRkzTkCZt8MAyveym26hqRk8eKIEewMjz//0fHuQzjHSTwsGE\nluy+3l0xAgMBAAECggEADQcpXPcpbzt/ndj6AZAh+1QQX+HJfmFLXpyiVi0MzINE\nlD++JGv75mFRXY1PzeLPYmpjRgbxAG57kYl55vxrs54pLnqOBKjkwDetX8S0Mevh\n12xdPApKYuid6KeWTt79xPl8B80Ow5DDyww05/YM4GHlf7VyhWOeSArrTlaP7hj0\nl+6mcH5SqGjg4Ve1i/DVny2G3wt54d301EKB1Ks6mTZxGaj9IhlmLxXF1V7ldO0X\nP6+5O+mTQLhRJTlojvLrSugZOb6cZldu1FC1LYrqZMQ9GGsIWOpsBmzedCFQR+G3\n3nlaxQaDYffhpRe9tJJhdI0gHVOIFT835MexWGW+6QKBgQD3tnVCIgNnY6vXBg7o\nBJ+R3/AvWLcYC+Fkq808FoofIVKQ/vKR9xViru1+54c6ws5E4ZqNv5te5yjCapD5\naROcMtr57Vp2Hu73fEof03jE2dq0h/Ovhtehh7EV+LazzHIOAh5V4u1uHQKa5RBK\nJ5iS3XsOxs6wE9YkRvWk5Hb+4wKBgQDQzDNSwSgQd2rsc8mahCFR0gCl8v8pzRI2\nv8YDJuGdlUNK88d3too5XqH8GMFg3LjYAJymq25hFNOGfOyTPkIEUhLpiG3A2aLD\n7STXnnc1Uw1NRy4ls7V818A83Hb24f7Uk3YhExUB7e3T/j1ZlcIJhLl65RHDe7nn\nBiqKmpw72wKBgGcv1kCqMojK+DYmC+eSpXX6tu7CIeMeb9Gjz2aMbRTyqJZF3X34\nUyw8eio3ABn2ND51TBBoFKy/1jbGdYWvw795X8ZknR4/XIQzfh0r1k8KARTa3SPt\nI73h7F6esFzNeWVkdIaKdSU9aGxlpxd8zw2+vRg2sLqgSL/r3z/E+9zJAoGBAJLU\nttbgPJNv1wJW3pRJjMDkJE6PFn9H1iIoNFBtHEXb/ImN61y1QnjboqAMrJi4P0iv\nDXprneCpa6Ls4NUe9//f06rkpQH0SnDrqHf02THnqLgKcVpUCTG061whUYuGG9VT\nqcPSjnhf4FqvNGd2WBCnhGP3CMnmjTH4dRwpY+r3AoGAPsX5QdK5mfGBxWtVLyNG\nf75zCecS6ibDSMR8tO8agEnTJI270HGHE2vV/kFo0nep1dgfxnlXgyn83mbZl4gP\n0VQ/0MLrrFRubbXOHeAcxFySz9SwBJtEKaMye28Kn22NM9ze6XVhoFJK+sL/b6QS\nm6H5jOAaWpW4mq6oQr+kUtw=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-503ee@bdtestep.iam.gserviceaccount.com",
    client_id: "100847182376597297379",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-503ee%40bdtestep.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }
  


const serviceAccount = require("../ChaveFireBase.json");



admin.initializeApp({
    credential: admin.credential.cert(config),
});

const bd = admin.firestore();

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

// let cartoes = [
//    {
//        nome: 'cordas 1',
//         valor: 'R$48,89',
//         imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf-kbQA8498ZcThY_nyRpJ5y_MLcGpt_ZQA&s'
// },
//    {
//         nome: 'cordas 2',
//        valor: 'R$99,90',
//         imagem: 'https://imageswscdn.wslojas.com.br/files/3196/MED_encordoamento-strinberg-sb-50-p-contrabaixo-eletrico-5-cordas-292596.jpg'
//    },
//     {
//         nome: 'cordas 3',
//         valor: 'R$75,80',
//         imagem: 'https://images.tcdn.com.br/img/img_prod/640308/180_encord_strinberg_c_baixo_ba5_acustico_27965_1_1cd9f625e3b549d9342130674f6b3c3f.jpg'
//     },
//     {
//         nome: 'cordas 4',
//         valor: 'R$80,00',
//         imagem: 'https://images.tcdn.com.br/img/img_prod/1028655/jogo_de_cordas_contrabaixo_eletrico_5_cordas_mp_044_125_221_1_44263d51c9b53111fd6d1f1dbd10a121.jpg'
//     },
//     {
//         nome: 'cordas 5',
//         valor: 'R$68,00',
//         imagem: 'https://down-br.img.susercontent.com/file/53f3408b74a52160222ff3bb815ddd45'
//     }
// ];
// const config = {
//     type: process.env.TYPE,
//     project_id: process.env.PROJECT_ID,
//     private_key_id: process.env.PRIVATE_KEY_ID,
//     private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Para garantir que quebras de linha sejam mantidas
//     client_email: process.env.CLIENT_EMAIL,
//     client_id: process.env.CLIENT_ID,
//     auth_uri: process.env.AUTH_URI,
//     token_uri: process.env.TOKEN_URI,
//     auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
//     client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
//     universe_domain: process.env.UNIVERSE_DOMAIN,
//   };


app.get('/produtos', async (req, res) => {
    try{
        const response = await bd.collection('cartoes').get();
        const cartoes = response.docs.map(doc => ({
            id: doc.id, ...doc.data(),
        }))
        console.log(cartoes)
        res.status(200).json({cartoes}); 
        console.log('cartoes devolvidos com sucesso')
    }catch (e){
        console.log(e);
        res.status(500).json({menssagem: 'Erro' + e});
        console.log('Erro ao buscar dados' + e);
    }
    
    
    res.status(200).json({ cartoes });
    console.log('oi');
    
})

app.post('/produtos', async (req, res) => {
    const{nome , valor , imagem} = req.body;
    if (!nome) {
        res.status(400).json({ mensagem: 'Nome do cartão invalido'})
        console.log('Novo cartão não cadastrado, nome invalida')
    }else if (!valor) {
        res.status(400).json({ mensagem: 'Valor do cartão invalido'})
        console.log('Novo cartão não cadastrado, valor invalida')
    }else if (!imagem) {
        res.status(400).json({ mensagem: 'Imagem do cartão invalido'})
        console.log('Novo cartão não cadastrado, imagem invalida')
    }else{
        try {
            const novoCartaoRef = await db.collection('cartoes').add({
               nome,
               valor,
               imagem,
               criadoEm: admin.firestore.FieldValue.serverTimestamp() 
            });
            res.status(201).json({mensagem: 'Cartão cadastro com sucesso', id: novoCartaoRef.id });
            console.log('Novo cartão cadastrado com ID:', novoCartaoRef.id)
        } catch (error) {
            console.error('Erro ao cadastrar cartão:', error);
            res.status(500).json({mensagem: 'Erro ao cadastrar cartão'});
        }
    }

});

app.delete('/produtos', async (req,res) => {
    const id = req.body.cartao;
    if (!id) {
        res.status(400).json({ mensagem: 'ID do cartão não fornecido'})
        console.log('ID do cartão não fornecido')

    }else{
        try {
            const cartaoRef = db.collection('cartoes').doc(id)
            const doc = await cartaoRef.get()
            if (!doc.exists) {
                res.status(404).json({mensagem: 'Cartão com ID'
                    + cartao + 'não encontrado'})
                    console.log('cartão não encontrado')
                }else{
                    await cartaoRef.delete()
                    res.status(200).json({mensagem: 'Cartão com ID'
                        + cartao + ' deletado'})
                        console.log('Cartão com ID' + cartão + ' deletado')
                }
            } catch (e) {
                console.error('Erro ao deletar cartão:', e)
                res.status(500).json({mensagem: 'Erro ao deletar cartão'})
            }
            }
        }
    

);

app.put('/produtos', async (req, res) => {
    const {nome, valor, imagem, id,} = req.body;
    if (!id) {
        res.status(400).json({mensagem:'ID do cartão não fornecido'})
        console.log('Cartão não atualizado,ID inválido.')
    } else {
        try{
            const cartaoRef = db.collection('cartoes').doc(id)
            const doc = await cartaoRef.get()
            if (!doc.exists) {
                res.status(404).json({ mensagem:'Cartão com ID'
                    + id + 'não encontrado'})
                    console.log('Cartão não encontrado')
                }else{
                    const dadosAtualizados = {}
                    if (nome) dadosAtualizados.nome = nome
                    if (valor) dadosAtualizados.valor = valor
                    if (imagem) dadosAtualizados.imagem = imagem
                    await cartaoRef.update(dadosAtualizados)
                    res.status(200).json({ mensagem: 'Cartão com ID'
                        + id + 'atualizado'})
                        console.log( 'Cartão com ID' + id + 'atualizado')
                }
            } catch (error) {
                console.error('Erro ao atualizar cartão:', error)
                res.status(500).json({ mensagem: 'Erro ao atualizar cartão'})
            }
        }
    }
)

module.exports = app;

// app.get('/produtos', (req, res) => {
//     res.status(200).json({ mensagem: 'Olá Mundo!' });
//     console.log('Oi');
// });

 app.listen(3000, () => {
     console.log(`Servidor rodando na porta ${porta}`);
 });