import express from 'express'

const router = express.Router()

import getCustomersList from './handlers/getCustomersList'
import updateCustomer from './handlers/updateCustomer'

router.get('/getCustomersList', getCustomersList)
router.put('/updateCustumer', updateCustomer)

export default router