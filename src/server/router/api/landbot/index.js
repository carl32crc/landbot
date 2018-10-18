import express from 'express'

const router = express.Router()

import getCustomers from './handlers/getCustomers'
import getCustomer from './handlers/getCustomer'
import updateCustomer from './handlers/updateCustomer'

router.get('/getCustomers', getCustomers)
router.get('/getCustomer/:id', getCustomer)
router.put('/updateCustumer', updateCustomer)

export default router