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

routerProductos.post('/productos', (req, res) => {
    let count = 1
    let ultimo
    productos.push(req.body)
    productos.forEach(producto => {
        producto.id = count++
    });
    ultimo = productos.at(-1)
    res.send(ultimo)
})

routerProductos.get('/productos/:id', (req, res) => {
    let id = req.params.id
    let productoID = productos.find(producto => producto.id == id)
    if (productoID != null ) {
        res.json(productoID)
    }else {
        res.send(`No existe un producto con id: ${id}`)
    }
        
         
})

routerProductos.put('/productos/:id',(req,res) =>{
    let id = req.params.id
    let nuevoProducto = req.body
    nuevoProducto.id = id
    let productoID = productos.find(producto => producto.id == id)

    if (productoID != null ) {

        let indice = productoID.id
        productos[indice-1] = nuevoProducto
        res.send(productos[indice-1])
        
    }else{
        
        res.send(`No existe un producto con id: ${id}`)

    }   

})

routerProductos.delete('/productos/:id',(req,res) =>{
    let id = req.params.id
    let productoID = productos.find(producto => producto.id == id)
    if (productoID != null) {
        let indice = identificar.id
        productos.splice(indice -1 , 1)
        res.send(productos)

    } else {

        res.send(`No existe un producto con id: ${id}`)
    }
    
    
})
const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))