const express = require('express')
const path = require('path')

const app = express()

// Definindo o templete engine
app.set('view engine', 'ejs')
app.set('views',  path.join(__dirname, 'views'))  //declara o caminho da pasta SRC na views.

// Definindo os arquivos publico
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via POST(formulario)
app.use(express.urlencoded({ extended: true }))

// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error (not found)
app.use((req, res) => {   
    res.send('Pagina nao encontrada!')
})

const port = process.env.PORT || 6060
app.listen(port)