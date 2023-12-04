const path = require('node:path')

// Barra separadora de carpetas segun SO (path.sep)
// Unix -> /
//Windows -> \
console.log(path.sep)



// join -> unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

// basename -> Te devuelve el nombre del fichero con
const base = path.basename('\tmp\vilca-secret-files/password.txt')
console.log(base)

// fileName -> devuelve el nombre del fichero sin la extensión
const fileName = path.basename('\tmp\vilca-secret-files/password.txt','.txt')
console.log(fileName)

// extname -> devuelve la extensión
const extension = path.extname('my.super.image.jpg')
console.log(extension)