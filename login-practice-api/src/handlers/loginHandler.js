const {loginController}=require('../controllers')
module.exports=async(req,res)=>{
  const data=req.body
  const user =await loginController(data)
  res.send(user)
}