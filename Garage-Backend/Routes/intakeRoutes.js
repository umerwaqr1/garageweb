const express=require('express');
const router=express.Router();
const { createIntake,getIntakes, updateIntakeStatus , deleteIntake }=require('../Controller/intakeControllers');

const {protect} = require('../Middleware/authMiddleware');

router.post('/', createIntake);
router.get('/', getIntakes);

router.put('/:id', updateIntakeStatus);
router.delete('/:id', protect, deleteIntake);
module.exports=router;