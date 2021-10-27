import { prisma } from '../../database/'
import { Pokemon } from 'src/entities/PokemonEntities'
import { IPokemonRepository } from '../'

class PrismaPokemonRepository implements IPokemonRepository {

  async store ( props: Pokemon ) {
    const newPokemon = await prisma.pokemon.create({
      data: {
        image: props.image,
        name: props.name,
        height: props.height,
        weight: props.weight,
        numberPokedex: props.numberPokedex,
        generation: props.generation,
        family: props.Wheater,
        HP: props.HP,
        Attack: props.Attack,
        Defense: props.Defense,
        Speed: props.Speed,
        Special_Atck: props.Special_Atck,
        Special_Defs: props.Special_Defs

      }
    })
  }


}

export { PrismaPokemonRepository }
