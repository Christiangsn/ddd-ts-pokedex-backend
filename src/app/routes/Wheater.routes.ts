import { Router } from 'express'
import { wheaterController } from '../Controllers/WheaterControllers'

const router = Router()

router.post('/wheater/created', (request, response) => wheaterController.store(request, response))

export default router