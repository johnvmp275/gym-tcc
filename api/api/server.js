const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)

// Ouça em todas as interfaces de rede (0.0.0.0) na porta 3000
server.listen(3000, '0.0.0.0', () => {
    console.log('JSON Server is running')
})

module.exports = server
