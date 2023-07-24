module.exports=(req,res)=>{
    console.log('handlenotfound');
    res.status(404).send({
        error:true,
        message:'Page not found'
    })
}