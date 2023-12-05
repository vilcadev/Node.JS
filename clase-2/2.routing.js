const http = require('node:http')

// CommonJS -> módulos clásicos de node
const dittoJson = require('./pokemon/ditto.json')

const desirePort = process.env.PORT ?? 3000


const processRequest = (req, res)=>{
    const { method, url } = req

    switch(method){
        case 'GET':
            switch(url){
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJson))
                    default:
                        res.statusCode = 404
                        res.setHeader('Content-Type', 'text/html; charset=utf-8')
                        res.statusCode = 404 // Not Found
                        res.end('<h1>404</h1>')
            }

        case 'POST':
            switch(url){
                case '/pokemon':{
                    let body=''
                    
                    req.on('data', chunk =>{
                        body += chunk.toString()
                    })
                    req.on('end',()=>{
                        const data = JSON.parse(body)
                        // mas adelante....Llamar a una base de datos patra guardar la info
                        res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'})

                        data.timestamp = Date.now()
                        res.end(JSON.stringify(data))
                    })

                    break;
                }
                   
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('404 Not Found')
            }
    }
}

const server = http.createServer(processRequest)


server.listen(desirePort,()=>{
    console.log(`server listening on port http://localhost:${desirePort}`)
})

