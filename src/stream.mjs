/*script para criar o arquivo a ser manipulado 
node -e "process.stdout.write(crypto.randomBytes(1e9))" > assets/big.file
*/

//1- Leitura de arquivo grande através de stream
/*
const http = require('http');
const {readFileSync, createReadStream} = require('fs');

http.createServer((req,res)=>{

    createReadStream("big.file")
    .pipe(res)
}).listen(3000, ()=> console.log('running at 3000'))*/

//2- Duplex Stream (ler e escrever)
/*Conectar terminal com o server criado
node -e "process.stdin.pipe(require('net').connect(1338))"

import net from 'net'

net.createServer(socket => socket.pipe(process.stdout)).listen(1338)*/

//3- Pipeline de stream 
/*
import {pipeline, Readable, Writable} from 'stream'
import {promisify} from 'util'

const pipelineAsync = promisify(pipeline)

const readableStream = Readable({
    read: function (){
        this.push("Hello Dude!!")
        this.push(null)
    }
})

const writableStream = Writable({
    write(chunk, enconding, cb){
        console.log('msg', chunk.toString())
        cb()
    }
})

await pipelineAsync(readableStream, writableStream) */

//4-
import {pipeline, Readable, Writable, Transform} from 'stream'
import {promisify} from 'util'
import {createWriteStream} from 'fs'

const pipelineAsync = promisify(pipeline)

const readableStream = Readable({
    read (){
        for(let index = 0; index <1e5; index ++){
            const person = {id:Date.now()+index, name:`Leo-${index}`}
            const data = JSON.stringify(person)
            this.push(data)
        }
        this.push(null) //finalizar readable
    }
})

const writableToCSV = Transform({
    transform(chunk, enconding, cb){
        const data = JSON.parse(chunk)
        const result = `${data.id}, ${data.name.toUpperCase()}\n`

        cb(null, result) //(error,success)
    }
})

const setHeaderCSV = Transform({
    transform(chunk, enconding, cb){
        this.counter = this.counter ?? 0
        
        if(this.counter){
            return cb(null,chunk)
        }

        this.counter +=1

        cb(null, "id, name\n".concat(chunk))
    }
})

await pipelineAsync(readableStream, writableToCSV, setHeaderCSV, createWriteStream('assets/meu.csv'))