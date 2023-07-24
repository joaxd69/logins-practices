const {Users}=require( '../data')
module.exports=(email)=>{
    const result=Users.filter(i=>i.email===email)
    
    return result[0]
}