const express=require('express');
const router=express.Router();
const { createIntake,getIntakes, updateIntakeStatus }=require('../Controller/intakeControllers');

router.post('/', createIntake);
router.get('/', getIntakes);

router.put('/:id', updateIntakeStatus);
module.exports=router;