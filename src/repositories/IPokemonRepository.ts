import { Pokemon } from '../entities/PokemonEntities'

export interface IPokemonRepository {

    store (props: Pokemon): Promise<Pokemon>

}
