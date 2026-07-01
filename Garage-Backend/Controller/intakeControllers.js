const Intake=require('../Models/intake');

const createIntake= async(req,res)=>{
try{
    const{driverName,email,carModel,serviceBay,symptoms}=req.body;
    const newIntake= await Intake.create({
        driverName,
        email,
        carModel,
        serviceBay,
        symptoms
    });
    res.status(201).json({success:true, data:newIntake});

}
catch(error){
    res.status(400).json({success:false, error:error.message});
}
};

const getIntakes = async(req,res)=>{
try{
    const intakes = await Intake.find().sort({createdAt:-1});
    res.status(200).json({success:true, count:intakes.length, data:intakes});

}catch(error){
    res.status(400).json({success:false, error:error.message});
}
};

const updateIntakeStatus = async (req,res)=>{
try{
const { status }= req.body;
const updatedIntake= await Intake.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true, runValidators:true}
);
if(!updatedIntake){
    return res.status(400).json({success:false, error:'Vehicle Request Not Found.'});
}
console.log(`Status Updated : [${req.params.id} is now [${status}]]`);
res.status(200).json({success:true, data:updatedIntake})
}
catch(error){
    res.status(400).json({success:false, error:error.message});
};

};

const deleteIntake = async (req,res)=>{
    try{
        const intakeId=req.params.id;
        if(!intakeId){
            return res.status(400).json({success:false, message:'BAD_REQUEST // MISSING_ID'});
        }
        console.log(`Attempting to delete intake with ID: ${intakeId}`);
        const deletedItem= await Intake.findByIdAndDelete(intakeId);
        if(!deletedItem){
            return res.status(404).json({success:false, message:'DATABASE_ERROR // LOG_NOT_FOUND'});
        }
        res.status(200).json({success:true, message:'VEHICLE_RECORD_DELETED_SUCCESSFULY', id:deletedItem});

    }
    catch(error){
      console.error("CRITICAL BACKEND ERROR IN DELETE:", error.message);
        res.status(500).json({success:false, message:'INTERNAL_SERVER_ERROR // OPERATION_ABORTED',error:error.message});

    }
};

module.exports={ createIntake , getIntakes, updateIntakeStatus , deleteIntake};