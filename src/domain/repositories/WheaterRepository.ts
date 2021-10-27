import {  WheaterRepositoryContract, CreateEntitiyWheater, WheaterEntitiyContract } from "@domain:WheaterContract";
import { prisma } from '../../config/database'
import { WheaterFactory } from '../factories/WheaterFactory'

class WheaterRepository implements WheaterRepositoryContract { 

    constructor(private wheaterFactory: WheaterFactory) {}

    public async store ( { wheater } : CreateEntitiyWheater ): Promise<WheaterEntitiyContract> {
        const createdWheater = await prisma.wheater.create({
            data :{
                wheater
            }
        })

        const Wheater = this.wheaterFactory.convertFromPrisma(createdWheater)

        return Wheater
    }

}


export { WheaterRepository }