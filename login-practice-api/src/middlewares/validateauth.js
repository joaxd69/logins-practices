const {validateToken}=require('../auth') 
module.exports=(req,res,next)=>{
   const token=req.headers['x-access-token']||req.headers['authorization']
   const validate=validateToken(token);
 
   if(validate.error&&!validate.auth){
      res.status(404).send({
        error:validate.error,
        message:'Page not found,auth required'
      })
   }else{
    next()
   }


}