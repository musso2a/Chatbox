const { createServer } = require('http')
const port = 3000

const server = createServer((req, res) => {
    const page = req.url
    console.log(page)

    
    let title = ''
    let statusCode = 200

    switch (page) {
        case '/':
            title = 'Home'
            break
        case '/signup':  
            title = 'Page d\'inscription'
            break
        case '/signin':
            title = 'Page de connexion'
            break
        case '/chat':
            title = 'ChatBox'
            break
        case '/admin':
            title = 'Profil'
            break
        default:
            statusCode = 404
            title = 'Cette page n’existe pas'
            break
    }
    res.writeHead(statusCode, { 'Content-Type': 'text/html' })
    
})

server.listen(port, () => console.log(`Serveur lancé sur le port ${port}`))
