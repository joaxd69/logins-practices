const express =require('express')

const app= express()

const PORT=3001

app.use(require('./src/server'))


app.listen(PORT,()=>{
   console.log(`app listen in server ${PORT}`)
})