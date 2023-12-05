const express = require('express')
const app = express()


const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')



// Todo esta lógica del middleware de abajo, express ya lo tiene y es: app.use(express.json())


app.use(express.json())
// Middleware
// con una middleware podemos: trackerar la request a la base de datos,
// -revisar si el ussuario tiene cookies, etc.
// app.use((req,res,next)=>{
//      if(req.method !== 'POST') return next()
//      if(req.headers['content-type']!== 'application/json') return next()   
     
//      // Solo llegan request que son POST  y que tienen el header Content-Type: application/json

//      let body =''

//      //escuchar el eventos data
//      req.on('data', chunk=>{
//         body += chunk.toString()
//      })

//      req.on('end',()=>{
//         const data = JSON.parse(body)
//         data.timestamp = Date.now()

//         //mutar la request y meter la información en el req.body
//         req.body = data
//         next()
//      })
// })
// {
//     "name":"ditto",
//     "type":"normal",
//     "moves":[
//       "transform"
//     ]
//   }


app.get('/pokemon/ditto',(req,res)=>{
    res.json(ditto)
})


app.post('/pokemon',(req,res)=>{

    // req.body deberíamos guardar en BD

    res.status(201).json(req.body)
})

// El error siempre al final ya que esLa última a la que va a llegar
// Cuando colocamos use, es como poner "*", esto significa que para todas las acciones,
// - sea get,post,etc., va a pasar por aqupi
app.use((req, res)=>{
    res.status(404).send('<h1>404</h1>')

})

app.listen(PORT,()=>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
