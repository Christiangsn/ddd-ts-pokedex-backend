declare module '@domain:Pokemon' {
    import { Pokemon } from "@prisma/client";
  
    export interface PokemonEntityInput {
      id: number;
      name: string;
    }
  
    export interface PokemonEntityContract {
      id: number;
      name: string;
      attack(): void;
    }
  
    export interface CreatePokemonInput {
      name: string;
    }
  
    export interface UpdatePokemonInput {
      id: string;
      name?: string;
    }
  
    export interface PokemonRepositoryContract {
      create(pokemon: CreatePokemonInput): Promise<PokemonEntityContract>
      find(id: string): Promise<PokemonEntityContract>
    }
  
  
    export interface PokemonFactoryContract {
      fromPrisma(input: Pokemon): PokemonEntityContract;
    }
}