//Axios https://www.npmjs.com/package/axios
{
const axios = require('axios')
const options = {
    url: 'http://localhost/test.htm',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {
      a: 10,
      b: 20
    }
  };
  axios(options)
    .then(response => {
      console.log(response.status);
    });
}

//Fetch https://www.npmjs.com/package/node-fetch
{
const fetch = require('node-fetch');

await fetch(`${baseUrl}/contratos/alterar-dia-cobranca`, {
    method: 'POST',
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({data: 'abc'})
});
}

//Request https://www.npmjs.com/package/request
{
const request = require('request')
const baseUrl = 'http://google.com.br'

request({url: baseUrl, json: true}, function (error, response, body){
    if(err){
        console.log('Erro: '+err)
    }
   const data = res.body
   console.log(data)
} )

//Request Post
request.post('http://service.com/upload').form({key:'value'})

//Request Streaming
request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

}

//HTTP Nativo
{
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
}