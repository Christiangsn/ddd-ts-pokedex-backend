import { PrismaTypeRepository } from "../../repositories/prisma/PrismaTypeRepository";
import { TypeServices } from "./TypeServices";
import { TypeController } from "./TypeControllers";

const typeRepository = new PrismaTypeRepository()
const typeServices = new TypeServices(typeRepository)
const typeControllers = new TypeController(typeServices)

export { typeControllers }