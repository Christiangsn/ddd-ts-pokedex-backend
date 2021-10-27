import { IWheaterRepository } from "../IWheaterRepository";
import { Wheater } from "../../entities/PokemonEntities";
import { prisma } from "../../database"


class PrismaWheaterRepository implements IWheaterRepository {

    async store (props: Wheater) {
        await prisma.wheater.create({
            data: {
                wheater: props.wheater
            }
        })

        return
    }

    async index () {
        const wheater = await prisma.wheater.findMany()
        return wheater
    }

}

export { PrismaWheaterRepository }