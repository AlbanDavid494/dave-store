import { Router } from 'express'
import {categories} from '../constants/index.mjs'

const router = Router()

router.get('/categories', (req, res) => {
    res.send(categories)
})

export default router