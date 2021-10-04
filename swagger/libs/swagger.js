const swaggerAutogen = require('swagger-autogen')()
const end = require('../controller/endpoints')

const outputFile = './src/config/swagger_output.json'
const endpointsFiles = ['./src/controller/endpoints.js']

swaggerAutogen(outputFile, endpointsFiles)