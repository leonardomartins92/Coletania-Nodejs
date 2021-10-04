//Bucket criado na AWS S3 para armazenar as imagens. 151
// Credenciais gerados no IAM para só acessar ao bucket 152

const express = require('express');
const app = express();

const AWS = require('aws-sdk');
const {accessKeyId, secretAccessKey} = require('./config/keys');
const s3 = new AWS.S3({accessKeyId, secretAccessKey});

const uuid = require('uuid/v1')

//conexao com bucket 159
app.get('/api-upload', (req,res)=>{
    const key = `${req.user.id}/${uuid()}.jpeg`

   const upload = s3.getSignedUrl('putObject',{
        Bucket: 'nome-do-Bucket-criado-na-AWS',
        ContentType: 'image/jpeg',
        Key:  key
    }, (err, url)=>{
        res.send({url, key});
    })
})
//Importante configurar nas permissoes do bucket na AWS para aceitar PUT, para não dar problema de CORS  160
// Ir no policy gen, gerar e adicionar na permissão do bucket a policy para que as imagens salvas possam ser acessadas. 162

/* Front-end usará a url para conectar com o bucket e salvar o arquivo
    
    const uploadConfig = await axios.get('/api-upload');
   
    await axios.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': file.type
        }
    })

*/


