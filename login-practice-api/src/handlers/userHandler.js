const {Users}=require('../controllers')
module.exports=(req,res)=>{
  const users=Users()
  res.send(users)
}