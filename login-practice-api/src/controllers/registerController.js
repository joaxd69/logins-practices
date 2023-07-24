const {Users}=require('../data/index')
module.exports=(data)=>{
    const addUser= Users.push(data);
     if(typeof addUser==='number'){
        return  Users
     }else{
     throw new Error('No se pudo agregar')
     }

}