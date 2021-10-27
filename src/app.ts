import express from 'express'
import cors from 'cors'
import routes from './app/routes'

class App {
    public app: express.Application

    constructor () {
      this.app = express()
      this.middlewares()
      this.routes()
    }

    private middlewares  (): void {
      this.app.use(cors())
      this.app.use(express.json())
    }

    private routes (): void {
      routes(this.app)
    }
}

export default new App().app
