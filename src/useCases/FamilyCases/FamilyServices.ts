import { IFamilyRepository } from "../../repositories";
import { IFamilyDTO } from "./FamilyDTO";

class FamilyServices {

    constructor(private familyRepository: IFamilyRepository){}

    async store( { family }: IFamilyDTO) {
        const newFamily = await this.familyRepository.store({family})
        return newFamily
    }

    async index (){
        const family = await this.familyRepository.index()
        return family
    }
}

export { FamilyServices }