import { Response, Request } from 'express'
import { WheaterServices } from './WheaterServices'

class WheaterControllers {

    constructor(private wheaterServices: WheaterServices) {}

    async store (req: Request, res: Response): Promise<Response> {
        const { wheater } = req.body

        try {
            const newwheater = await this.wheaterServices.store({wheater})
            return res.json(newwheater)
            
        } catch (error) {
            return res.status(400).json({ error: error})
        }
    }

    async index (req: Request, res: Response): Promise<Response> {

        try {
            const wheater = await this.wheaterServices.index()
            return res.json(wheater)
        } catch (error) {
            return res.status(400).json({ error: error})
        }
    }



}

export { WheaterControllers }