const http = require('node:http') //Protocolo http
const {findAvailablePort} = require('./10.free-port.js')


// env -> Variable de entorno
// const desireport = process.env.PORT ?? 3000

const server = http.createServer((req, res)=>{
    console.log('request received')
    res.end('hola mundo')
})

findAvailablePort(3000).then(port =>{
    server.listen(port,()=>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})

