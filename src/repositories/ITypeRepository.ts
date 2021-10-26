import { Type } from "../entities/PokemonEntities";

export interface ITypeRepository { 
    store ( props: Type ): Promise<void>
    index (): Promise<Type[]>
}