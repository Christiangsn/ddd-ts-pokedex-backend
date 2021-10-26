import { GenerationServices } from "./GenerationServices";
import { Response, Request } from 'express'

class GenerationControllers {

    constructor(private generationServices: GenerationServices) {}

    async store (req: Request, res: Response){
        const { numberGeneration, description } = req.body

        try {
            const newGeneration = await this.generationServices.store({ numberGeneration, description })
            return res.status(201).json()
        } catch (error) {
            return res.status(400).json({ error: error})
        }

    }


}

export { GenerationControllers }