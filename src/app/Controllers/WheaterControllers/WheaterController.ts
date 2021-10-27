import { WheaterUseCases } from '../../../domain/useCases/WheaterServices/WheaterUseCases'
import { Response, Request } from 'express'

class WheaterController {

    constructor (private wheaterUseCases: WheaterUseCases) {}

    async store (req: Request, res: Response): Promise<Response> {
        const { wheater } = req.body

        try {
            const newwheater = await this.wheaterUseCases.store({wheater})
            return res.json(newwheater)
            
        } catch (error) {
            return res.status(400).json({ error: error})
        }
    }


}

export { WheaterController }