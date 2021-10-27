import { Wheater } from "../entities/PokemonEntities";

export interface IWheaterRepository {
    store (props: Wheater): Promise<void>
    index (): Promise<Wheater[]>
}