const http = require('node:http') //Protocolo http
const fs = require('node:fs')

// env -> Variable de entorno
const desirePort = process.env.PORT ?? 3000

const processRequest = (req, res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    
    if(req.url === '/'){
        res.end('<h1>Bienvenido a mi página de inicio</h1>')
    } else if(req.url === '/imagen-anime.png'){

        fs.readFile('./clase-2/anime.png',(err, data)=>{
            if(err){
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            }else{
                // Buffer -> Son útiles para trabajar con archivos, gráficos, criptografías, etc.
                // Le decimos que el data (el cual es un buffer, es decir 
                // nuestra imagen esta en binario), lo interprete como imagen
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })

    }else if(req.url === '/contacto'){
        res.end('<h1>Contacto</h1>')
    }else{
        res.statusCode = 404 // Not Found
        res.end('<h1>404</h1>')
    }
    
}

const server = http.createServer(processRequest)

server.listen(desirePort,()=>{
    console.log(`server listening on port http://localhost:${desirePort}`)
})


