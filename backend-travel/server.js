const express  =require('express')
const app =express()
const port = 5000

app.get("/",(req,res)=>{
    res.send("Express Working")
})

app.listen(port ,()=>{
    console.log("Server started 300")
})