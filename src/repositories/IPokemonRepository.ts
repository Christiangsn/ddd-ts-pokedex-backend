import { Pokemon } from '../entities/PokemonEntities'

export interface IPokemonRepository {

    index(): Promise<Pokemon[]>

}
