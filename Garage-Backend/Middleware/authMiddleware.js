const jwt=require("jsonwebtoken");
const Admin=require("../Models/adminModel");

const protect=async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token=req.headers.authorization.split(' ')[1];
            console.log("Backend received token:", token);
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.Admin = await Admin.findById(decoded._id).select("-password");
            next();
        }
        catch(err){
            console.error("Error in authMiddleware.js: ",err);
            return res.status(401).json({success:false,error:"Not authorized, token failed",err});
        }
    }
    if(!token){
        return res.status(401).json({success:false,error:"Not authorized, no token"});
    }
}
module.exports= {protect};