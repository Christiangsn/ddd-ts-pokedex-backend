import { Router } from 'express'
import { familyControllers } from '../useCases/'

const router = Router()

router.post('/familycreated', (request, response) => familyControllers.store(request, response))
router.get('/family', (request, response) => familyControllers.index(request, response))

export default router