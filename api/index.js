const express = require('express');
const cors = require('cors');
const admin = require("firebase-admin");

const config = {
   type: "service_account",
  project_id: "bdtestep",
  private_key_id: "b80d9fc63c4020493531d06abb6c882684b6449f",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCPUfVOBNll9SB4\nKpIFPm586I2y5emxY/uMKl93Z2RrBI/Qx9Bd1d21cEEb4HfC/uS4NYEwRmjsbPIo\n0ZzWPYE2v6uklrdQTeXQH9cEzTZbuEmPzVfg5dYZvsgduW9/JRb9Cl8c9UWmDx5K\n/IGCobC2ffdRsl81sADvGK9dk2KWRwzzOiE56RehZCHO4FgNaD2A7GA9fwx77aNE\nUXvNsaG1vZ1HmkZlzb2LSOewYOsZFpB3FLjQzaqT2F5h5cZZt2pVAvMaO+rkmRR4\no0iuxEXsT+VDP5swKAYSYAn8CYbXe6ocUWDFPcmbVRAVjF4tnLwedhlqYMy2j63I\nKy/MtRHpAgMBAAECggEAF1QMXUgtyMpHIDgxr3fTjTJfSjThPpYbLlwBURK7xi2m\naSH1GSkEHxHoDy0Q4WUS/qb64cw8LOuo2RsRb8/wFeTKAA7mRMSBOUjNe4MZq4FK\nPAV9HebbXDJxKWFzNBtp7ANBqxmDXj3MvQDv5b8C4BmN5bbmh3sgE8sNVGp2nCYz\nFscpVq5Xd+yu72C491mCIxuB0XXPrGtP9gyklgXFRqt0uBNZfI8f+jDk4IB31uyS\n9zwIaG1B6tS+ghJpf5gfUTfZoHxV4MNU4wGkC8iTs+tpMUzqlE1cNjdV3lfCdw3s\nOOPPZeyWkmiMNhUl642OaeKQ4Z8oc7qfPBLYlB1TRwKBgQDJTnvsrtKeKCkgaHgG\ny7zuuVQ/xkBOmdXQxyulDDr5JhGYNsKmACMVaY2TBmCBhJZflDA4fgv5BPkCnFAe\nu3BuSxW+EsfEAEV1B8c2psD6bC2UQCmw9FgRS7BMx7QTVOY8FpE7NIyKHtRSSVi8\nm7FXp02SepeeryPn5FuGs2o8bwKBgQC2QlUpo9NWDtTG3fyCc3Ef5YQ1zQkH3SZY\nDcINKuDzcuSDmFupqaBrsmhU4e7WbRkPyRUnb2gKUzWTWxtYvHzvNzHt81svZZl6\nTsH1jzD82MS1heu3l6SB2OZherSJUR1ApYFcWOi4QcnigvydiJKi3Ku+EV7LWfX0\ngGWiF6BzJwKBgBr8A06hzKfYuFKYzmYSz3usqid2Ws5ufqPi3u3b6tfVC4y84nDA\nGfPX11t7Alq6PDIJukEIXHCAAyUfcPn9pD+UnxCAkfirFKRwa3re9YVcFOwHgc8v\nodKHs9VG+9OPkOFDISqvi5tEMK/rFxMJR8d5LMPS3RovXf/Ks54l1LrPAoGADQPf\noQGZ7eNRPoJLreUghu6U6mKh6nXYbyFMYjRVrAzgVKVkplD+q7Ip0SXxME7KI15w\nrEhAXbxjbwpqgYO0SEDgx+VA9bmDpEBLiYWYMfYo1e2iT5H8pWkfyoZAri2ksSEg\ng7+1nrLT/+DquTUvg4HOodwLsOnTrooct96IDrECgYBkSXPnBBcB32yRBNL6r0td\nGbnRVQwMotRAbnwgVzy7sT44icbiWw+zDh70nFXbXIQzxQ8QgkHoP3qdetXjwQLC\nmaznqVMC3mKTYK5F01EQ8skYLPjGQwFQ5Ftz1pXD9VLWwgPidtP7dkJws9sBVybJ\nED08mf5lUW8GTqfL4pWEUQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-503ee@bdtestep.iam.gserviceaccount.com",
  client_id: "100847182376597297379",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-503ee%40bdtestep.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
  };


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