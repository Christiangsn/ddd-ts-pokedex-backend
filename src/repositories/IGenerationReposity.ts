import { Generation } from "../entities/PokemonEntities";

export interface IGenerationRepository {
    store ( props: Generation ): Promise<void>

}
