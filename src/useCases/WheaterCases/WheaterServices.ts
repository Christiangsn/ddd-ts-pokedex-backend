import { IWheaterRepository } from '../../repositories'
import { IWheaterDTO } from './WheaterDTO'

class WheaterServices {

    constructor(private wheaterServices: IWheaterRepository ) {}

    async store ( { wheater }: IWheaterDTO ) {
        const newWheater = await this.wheaterServices.store({wheater})
        return newWheater
    }
    
    async index () {
        const wheater = await this.wheaterServices.index()
        return wheater
    }


}

export { WheaterServices }