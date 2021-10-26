import { prisma } from '../../database/'
import { Pokemon } from 'src/entities/PokemonEntities'
import { IPokemonRepository } from '../'

class PrismaPokemonRepository implements IPokemonRepository {
  async index (): Promise<Pokemon[]> {
    return []
  }


}

export { PrismaPokemonRepository }
