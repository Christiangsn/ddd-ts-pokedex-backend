import { Response, Request } from 'express'
import { PokemonUseCases } from './PokemonUseCases'

class PokemonController {
  constructor (
      private pokemonUseCases: PokemonUseCases
  ) {}

  public async store (req: Request, res: Response): Promise<Response> {
    const { name, number } = req.body

    try {
      const newPokemon = await this.pokemonUseCases.store({ name, number })
      return res.json(newPokemon)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

export { PokemonController }
