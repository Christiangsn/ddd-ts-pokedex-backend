
import bodyParser from 'body-parser'
import express from 'express'
import Wheater from './Wheater.routes' 


export default (app: express.Application) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(Wheater)
}