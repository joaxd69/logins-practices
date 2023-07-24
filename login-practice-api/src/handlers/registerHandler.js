const {Register}=require('../controllers')
const {hashpassword}=require('../utils')
module.exports=async(req,res)=>{
  const {id,name,email,password}=req.body
  const passwordhashed=await hashpassword(password)
 Register({id,name,email,passwordhashed})
  
  res.send({id,name,email})
}