const { Users } = require("../data");
const {createToken}=require('../auth')
const {comparepassword}=require('../utils')
module.exports = async (data) => {
  const { email, password } = data;

  const searchUser=Users.filter((item,index)=>item.email===email)
  
  const userresult=searchUser[0]
  console.log(userresult,password);
  if(!userresult){
    return 'Credenciales incorrectas'
  }else{
    const iscorrectpassword=await comparepassword(password,userresult.passwordhashed)
    console.log(iscorrectpassword);
    if (!iscorrectpassword){
      return 'Credenciales incorrectas'

    }

    return {
      menssage:'Usted se ha logueado con exito',
      token:createToken(email,'1m')
    }
  }

};

