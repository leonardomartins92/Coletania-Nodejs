const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./config/swagger_output.json')

http.createServer(app).listen(3000)
console.log("Listening at:// port:%s (HTTP)", 3000)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./controller/endpoints')(app)