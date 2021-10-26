import { IGenerationRepository } from '../../repositories'
import { IGenerationDTO } from './GenerationDTO'

class GenerationServices {

    constructor(private generationRepository: IGenerationRepository) {}

    async store ( { numberGeneration, description }: IGenerationDTO ) {
        const newGeneration = await this.generationRepository.store({
            numberGeneration,
            description
        })
        return
    }


}

export { GenerationServices }