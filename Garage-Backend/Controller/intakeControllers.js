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
    {status},
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

const deleteIntake=async (req,res)=>{
try{
    const intake=await Intake.findByIdAndDelete(req.params.id);
    if(!intake){
        return res.status(404).json({success:false,error:'Intake Request Not Found'});
        
    }
   console.log(`🗑️  Intake Cleared: Request ID [${req.params.id}] deleted from database.`);
    res.status(200).json({success:true,data:{}});
} catch(err){
    res.status(500).json({success:false,error:err.message});
}
}

module.exports={ createIntake , getIntakes, updateIntakeStatus , deleteIntake};