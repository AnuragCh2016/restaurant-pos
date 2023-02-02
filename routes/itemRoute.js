import express from 'express'
const router = express.Router()

// Import the item controller
import { ItemController } from '../controllers/itemController.js'

// Making routes for the item controller
router.post('/', ItemController.createItem)
router.get('/', ItemController.getItem)
router.get('/:id', ItemController.getItemById)
router.put('/:id', ItemController.updateItem)
router.delete('/:id', ItemController.deleteItem)

export default router;