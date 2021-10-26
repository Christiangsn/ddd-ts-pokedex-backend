import bodyParser from 'body-parser'
import express from 'express'
import PokemonRouter from './Pokemon.routes' 
import Types from './Type.routes'

export default (app: express.Application) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(PokemonRouter, Types)
}
