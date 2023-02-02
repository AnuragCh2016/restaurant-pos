import express from 'express'
const router = express.Router()

// Import the order controller
import { OrderController } from '../controllers/orderController.js'

// Making routes for the order controller
router.post('/', OrderController.createOrder)
router.get('/', OrderController.getOrders)
router.get('/:id', OrderController.getOrderById)
router.put('/:id', OrderController.updateOrder)
router.delete('/:id', OrderController.deleteOrder)

export default router;