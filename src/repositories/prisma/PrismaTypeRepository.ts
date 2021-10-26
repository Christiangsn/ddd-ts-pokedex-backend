
import { prisma } from "../../database"
import { Type } from "src/entities/PokemonEntities"
import { ITypeRepository } from "../ITypeRepository"

class PrismaTypeRepository implements ITypeRepository {

    async store ( props: Type ) {
        await prisma.type.create({
            data: {
                idType: props.idType,
                description: props.description
            }
        })

        return
    }

    async index () {
        const types = await prisma.type.findMany()
        return types
    }
  
  
}
  
export { PrismaTypeRepository }
  