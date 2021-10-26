import { Router } from 'express'
import { pokemonController } from '../useCases'

const router = Router()

router.post('/created', (request, response) => pokemonController.store(request, response))

export default router