const express = require('express')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app =>{
    app.use(express.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
    app.get('/', (req,res)=>{
        res.send('Welcome');

    })
}