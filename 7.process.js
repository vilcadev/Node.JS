// process -> Objeto global que proporciona información y control
// sobre el proceso actual de ejecución

// por ejemplo:

// argumento de entrada
console.log(process.argv);

// Argumento y su salida
// process.exit(1) // 0-> todo salio bien, 1 -> hubo algún error y queremos que salga

// podemos controlar eventos
// process.on('exit', ()=>{
//     // limpiar recursos
// })

// current working directory
console.log(process.cwd());

// platform

console.log(process.env.PEPITO);
