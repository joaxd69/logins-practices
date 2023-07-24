const { finduser } = require("../utils");

module.exports=(req,res,next)=>{
  const {email,password}=req.body;
  const userexist=finduser(email);
  const resquest=req.method
  if(resquest !=='POST'){
    return res.status(404).send({
      error:true,
      message:'Page not found'
  })   
  }
  if(!email || !password){
    return res.status(404).send({
        error:true,
        message:'Por favor complete los campos'
    })
  }if(!userexist){
    return res.status(404).send({
      error:true,
      message:'Credenciales no validas'
  })
  }
  else{
    next()
  }
}