// import modules

import express from 'express'



import { pokemon } from './data/pokemon-data.mjs'



// create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')



// mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/pokemon', function(req, res) {
  res.render('pokemon/index', {
    pokemon: pokemon
  })
})


// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})