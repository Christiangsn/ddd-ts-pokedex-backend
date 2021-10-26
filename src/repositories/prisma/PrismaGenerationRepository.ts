import { IGenerationRepository } from "../IGenerationReposity";
import { Generation } from "../../entities/PokemonEntities";
import { prisma } from "../../database"

class PrismaGenerationRepository implements IGenerationRepository {

    async store ( props: Generation ) {
        await prisma.generation.create({
            data: {
                numberGeneration: props.numberGeneration,
                description: props.description
            }
        })

        return
    }


}

export { PrismaGenerationRepository }