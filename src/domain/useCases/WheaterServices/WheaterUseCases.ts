import { IWheaterEntity } from '../../entities/IWheaterEntity'
import type { WheaterRepositoryContract } from "@domain:WheaterContract";
import { IWheaterDTO } from './WheaterDTO'

class WheaterUseCases {
    constructor(private wheaterRepository: WheaterRepositoryContract ) {}

    public async store ( { wheater }: IWheaterDTO): Promise<IWheaterEntity>{
        const newWheater = await this.wheaterRepository.store({wheater})
        return newWheater
    }
}

export { WheaterUseCases }
