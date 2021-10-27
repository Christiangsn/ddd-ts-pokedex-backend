import { IFamilyRepository } from "../";
import { Family } from "../../entities/PokemonEntities";
import { prisma } from "../../database"

class PrismaFamilyRepository implements IFamilyRepository {

    async store (props: Family) {
        await prisma.family.create({
            data: {
                family: props.family
            }
        })
        return 
    }

    async index () {
        const family = await prisma.family.findMany()
        return family
    }

}

export { PrismaFamilyRepository }