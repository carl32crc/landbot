import express from 'express'

const router = express.Router()

import getCustumersList from './handlers/getCustumersList'

router.get('/getCustumersList', getCustumersList)

export default router