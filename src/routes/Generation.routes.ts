import { Router } from 'express'
import { generationControllers } from '../useCases/'

const router = Router()

router.post('/type/created', (request, response) => generationControllers.store(request, response))

export default router