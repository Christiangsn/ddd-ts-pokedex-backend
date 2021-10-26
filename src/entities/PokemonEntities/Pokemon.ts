import { Type } from '.'
import { Generation } from './Generation';

class Pokemon {
  public id?: string;
  public name: string;
  public image?: string;
  public height?: number;
  public weight?: number;
  public numberPokedex: number;

  public generation?: Generation[]
  public type?: Type[]

  constructor (props: Pokemon) {
    Object.assign(this, props)
  }
}

export { Pokemon }
