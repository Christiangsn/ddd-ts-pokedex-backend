import { Family } from "../entities/PokemonEntities";


export interface IFamilyRepository {
    store (props: Family): Promise<void>
    index (): Promise<Family[]>
}