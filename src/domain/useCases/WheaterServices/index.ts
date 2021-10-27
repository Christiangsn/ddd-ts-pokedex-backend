
import { WheaterRepository } from '../../repositories/WheaterRepository'
import { WheaterFactory } from '../../factories/WheaterFactory'
import { WheaterUseCases } from './WheaterUseCases'

const contracts = new WheaterFactory()
const repository = new WheaterRepository(contracts)
const wheaterUseCases = new WheaterUseCases(repository)

export { wheaterUseCases }
