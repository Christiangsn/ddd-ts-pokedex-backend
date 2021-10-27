import { wheaterUseCases } from '../../../domain/useCases'
import { WheaterController } from './WheaterController'

const wheaterController = new WheaterController(wheaterUseCases)

export { wheaterController } 