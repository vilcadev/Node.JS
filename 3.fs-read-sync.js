// Esto sólo en los módulos nativos que no tienen promesas nativas

// Con promisify convertimos la versión a promesas
// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile) 

const fs = require('node:fs')


// readFileSync -> Forma Síncrona de leer archivos
// readFile -> Forma Asíncrona de leer archivos

console.log('Leyendo el primer archivo ...')

const text = fs.readFile('./archivo.txt', 'utf-8' ) // <--- oye node ejecuta ese callback cuando termines de leer
console.log('primer texto',text)



console.log('Hacer cosas mientras lee el archivo...')



console.log('Leyendo el segundo archivo ...')
const secondText = fs.readFile('./archivo2.txt', 'utf-8') // <--- oye node ejecuta ese callback cuando te avise
console.log('primer texto',secondText)
