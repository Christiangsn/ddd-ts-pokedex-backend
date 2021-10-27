import bodyParser from 'body-parser'
import express from 'express'
import PokemonRouter from './Pokemon.routes' 
import Types from './Type.routes'
import Family from './Family.routes'
import GenerationServices from './Generation.routes'
import Wheater from './Wheater.routes' 

export default (app: express.Application) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(PokemonRouter, Types, Family, GenerationServices, Wheater)
}
