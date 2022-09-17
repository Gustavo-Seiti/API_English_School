const express = require('express')
const routes = require('./api/routes')

const app = express()

const port = 3000

routes(app) // só pra entender estamos chamando  método que é exportado láaaa do index.js da pasta routes

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = app
