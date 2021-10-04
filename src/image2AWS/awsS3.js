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

    s3.getSignedUrl('putObject',{
        Bucket: 'nome-do-Bucket-criado-na-AWS',
        ContentType: 'image/jpeg',
        Key:  key
    }, (err, url)=>{
        res.send({url, key});
    })
})

/* Front-end usará a url para conectar com o bucket e salvar o arquivo
    
    const uploadConfig = await axios.get('/api-upload');
   
    await axios.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': file.type
        }
    })

*/