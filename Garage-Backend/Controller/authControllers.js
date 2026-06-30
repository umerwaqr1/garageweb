const Admin=require("../Models/adminModel");
const jwt=require("jsonwebtoken");

const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please provide email and password"});
        }
        const admin=await Admin.findOne({email}).select("+password");
        if(!admin){
            return res.status(404).json({success:"false", message:"Invalid Credentials"});
        }
        const isMatch=await admin.matchPassword(password);
        if(!isMatch){
            return res.status(404).json({success:"false",message:"Invalid Credentials"});
        }
        const token=jwt.sign({id:admin._id},process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        res.status(200).json({success:true,token});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}
const registerAdmin=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const adminExists=await Admin.findOne({email});
        if(adminExists){
        return res.status(400).json({success:false, message:"Admin Already Exist"});
        }
        const admin=await Admin.create({username,email,password});
        res.status(201).json({success:true,message:"Admin Registered Successfully"});

    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}
module.exports={ loginAdmin , registerAdmin };