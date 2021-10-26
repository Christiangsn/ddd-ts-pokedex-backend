import { Response, Request } from 'express'
import { TypeServices } from './TypeServices'


class TypeController {

    constructor(private typeServices: TypeServices)
    {}

    async store (req: Request, res: Response): Promise<Response> {
        const { description, idType } = req.body
        try {
            const newType = this.typeServices.store( { description, idType } )
            return res.status(201).json(newType)
        } catch (error) {
            return res.status(401).json({ error: error})
        }
    } 

    async index (req: Request, res: Response): Promise<Response> {

        try {
            const types = await this.typeServices.index()
            return res.json(types)
            
        } catch (error) {
            return res.status(400).json({ error: error})
        }
    }


}

export { TypeController } 