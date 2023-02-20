const express = require('express')
const cors = require('cors')
const dataService = require('./services/dataservice')
const server = express()
server.use(cors({
    origin: 'http://localhost:4200'
}))
server.use(express.json())

server.listen(3000, () => {
    console.log(`Cart server is listening at port number 3000`);
})
//all-products Api
server.get('/all-products', (req, res) => {
    dataService.allProducts()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})
//view-product api
server.get('/view-products/:productId', (req, res) => {
    dataService.viewProduct(req.params.productId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})
//addtowishlist api
server.post('/add-to-wishlist', (req, res) => {
    dataService.addtowishlist(req.body)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})
//getwish list
server.get('/get-wishlist', (req, res) => {
    dataService.getWishlist()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})
//remove item from wishlisrt
server.delete('/remove-item-wishlist/:productId', (req, res) => {
    dataService.deleteItemWishlist(req.params.productId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})