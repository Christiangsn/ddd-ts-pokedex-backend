import { Type } from '.'
import { GenerationEntity } from './Generation';
import { Family } from './Family'
import { Wheater } from './Wheater'
import { Pokemon } from '@prisma/client'

class PokemonEntity {
  public id?: string;
  public name: string;
  public image?: string;
  public height?: number;
  public weight?: number;
  public numberPokedex: number;
  public HP: number;
  public Attack: number;
  public Defense: number;
  public Speed: number;
  public Special_Atck: number;
  public Special_Defs: number;

  public generation?: number
  public Type?: number
  public family?: string;
  public Wheater?: number;

  constructor (props: Pokemon) {
    Object.assign(this, props)
  }
}

export { PokemonEntity }
