import { Response, Request } from 'express'
import { FamilyServices } from './FamilyServices'

class FamilyControllers {
    
    constructor(private familyServices: FamilyServices) {}

    async store (req: Request, res: Response): Promise<Response> {
        const { family } = req.body

        try {
            const newFamily = await this.familyServices.store({ family})
            return res.status(201).json(newFamily)
        } catch (error) {
            return res.status(401).json({ error: error})
        }
    }

    async index (req: Request, res: Response): Promise<Response> {

        try {
            const family = await this.familyServices.index()
            return res.json(family)
        } catch (error) {
            return res.status(400).json({ error: error})
        }
    }

}

export { FamilyControllers }