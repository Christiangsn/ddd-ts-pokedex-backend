
import { PrismaWheaterRepository } from '../../repositories/prisma/PrismaWheaterRepository'
import { WheaterServices } from './WheaterServices'
import { WheaterControllers } from './WhaterControllers'

const wheaterRepository = new PrismaWheaterRepository()
const wheaterServices = new WheaterServices(wheaterRepository)
const wheaterControllers = new WheaterControllers(wheaterServices)


export { wheaterControllers }