const net = require('node:net')

// Función 
function findAvailablePort(desiredPort){
    return new Promise((resolve,reject)=>{
        const server = net.createServer()

        server.listen(desiredPort,()=>{
            // Desestructuración
            const {port} = server.address()
            server.close(()=>{
                resolve(port)
            })
        })

        server.on('error',(err)=>{
            if(err.code === 'EADDRINUSE'){
                    // al colocar 0, buscará el primer puerto que este disponible
                findAvailablePort(0).then(port => resolve(port))
            }else{
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }