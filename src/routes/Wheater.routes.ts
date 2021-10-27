import { Router } from 'express'
import { wheaterControllers } from '../useCases/'

const router = Router()

router.post('/wheater/created', (request, response) => wheaterControllers.store(request, response))
router.get('/wheaters', (request, response) => wheaterControllers.index(request, response))

export default router