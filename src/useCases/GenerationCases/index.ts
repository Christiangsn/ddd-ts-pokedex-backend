import { PrismaGenerationRepository } from '../../repositories/prisma/PrismaGenerationRepository'
import { GenerationServices } from './GenerationServices'
import { GenerationControllers } from './GenerationControllers'

const generationRepository = new PrismaGenerationRepository()
const generationServices = new GenerationServices(generationRepository)
const generationControllers = new GenerationControllers(generationServices)

export { generationControllers }