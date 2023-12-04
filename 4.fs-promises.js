const fs = require('node:fs/promises') // <-- usando fs pero con promesas, ya no con callbacks

// readFileSync -> Forma Síncrona de leer archivos
// readFile -> Forma Asíncrona de leer archivos

console.log('Leyendo el primer archivo ...')

fs.readFile('./archivo.txt', 'utf-8').then(text =>{
    console.log('primer texto:',text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8').then(text=>{
    console.log('segundo texto:',text)
})
