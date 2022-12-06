const express = require('express')
const app = express()

app.use(express.static('public'))
const routerProductos = express.Router()
routerProductos.use(express.urlencoded( {extended: true}))

app.use('/api', routerProductos)
routerProductos.use(express.json())

let productos = []

routerProductos.get('/productos', (req, res) =>{
    res.json(productos)
})

/*
app.post('/subir', upload.single('miArchivo'),(req, res, next) =>{
    const file = req.file
    if(!file) {
        const error = new error('Error subiendo el archivo')
        error.httStatusCode = 400
        return next(error)
    }
    res.send(`Archivo ${file.originalname} subido exitosamente`)
})
*/

routerProductos.get('/productos/:id', (req, res) => {
    let productoID = productos.find(producto => producto.id = req.params.id)
    if (productoID != null ) {
        res.json(productoID)
    }else{
        res.json(`No existe un producto con ${id}`)
    }      
})

routerProductos.post('/productos', (req, res) => {
    let count = 1
    let ultimo
    productos.push(req.body)
    productos.forEach(producto => {
        producto.id = count++
    });
    ultimo = productos.at(-1)
    res.json(ultimo)
})


const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))