import { Router } from 'express'
import { typeControllers } from '../useCases/'

const router = Router()

router.post('/type/created', (request, response) => typeControllers.store(request, response))
router.get('/types', (request, response) => typeControllers.index(request, response))

export default router