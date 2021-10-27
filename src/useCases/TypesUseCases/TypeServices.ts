import { ITypeDTO } from './TypesDTO'

import { ITypeRepository } from '../../repositories'

class TypeServices {

    constructor ( private typeRepository: ITypeRepository) { }

    async store ( { description, idType }: ITypeDTO) {
        await this.typeRepository.store( { 
            description, 
            idType: Number(idType)
        })
        return 'Type created is sucess!!'
    }

    async index () {
        const types = await this.typeRepository.index()
        return types
    }


}

export { TypeServices }