const pdf = require('html-pdf')
const ejs = require('ejs')

var nomeUsuario = "Leo";
var email = "contato@abc";
var categoria = "Prof"

ejs.renderFile("./modeloPDF.ejs", {nome: nomeUsuario, email, categoria}, (err, html)=>{
    if(err){
       return console.log('Erro '+err)
    }
    pdf.create(html,{}).toFile("./meuPdf.pdf", (error, res)=>{
        if(error){
            return console.log("Teve um erro"+error)
        }
        console.log(res)
    })
})

