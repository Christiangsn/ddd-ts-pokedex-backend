import { PokemonController } from './PokemonControllers'
import { PokemonUseCases } from './PokemonUseCases'
import { PrismaPokemonRepository } from '../../repositories/prisma/PrismaPokemonRepository'

const prismaPokemonRepository = new PrismaPokemonRepository()
const pokemonUseCases = new PokemonUseCases(prismaPokemonRepository)
const pokemonController = new PokemonController(pokemonUseCases)

export { pokemonController }
