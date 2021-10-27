import { PrismaFamilyRepository } from '../../repositories/prisma/PrismaFamilyRepository'
import { FamilyServices } from './FamilyServices'
import { FamilyControllers } from './FamilyControllers'

const familyRepository = new PrismaFamilyRepository()
const familyServices = new FamilyServices(familyRepository)
const familyControllers = new FamilyControllers(familyServices)

export { familyControllers }