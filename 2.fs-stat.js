 // a partir de node 16, se recomiendo poner "node:"
const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //Si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size //tamaño en bytes
    
)