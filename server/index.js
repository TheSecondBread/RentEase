const express = require("express")
const connectMongo = require("./connection")
const userRouter= require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const propRoutes = require("./routes/propRoutes")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const app= express()
require("dotenv").config()
const secret = process.env.JWT_SECRET




//DB
connectMongo(process.env.MONGOURI)
.then(console.log("mongo connected"))

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())



function auth(req,res,next){
    const authHeader=req.headers['authorization']
    
    const token=authHeader && authHeader.split(" ")[1]
    console.log(token)
    if(!token){
        res.json({msg:"login"})
    }
    jwt.verify(token,secret,(err,user)=>{
        console.log(user)
        if(err){
            res.json({msg:"err"})
        }
        else{
            req.user=user
            next()
        }
    })
}


//non auth routes
app.use("/",userRouter)
//auth routes
//user
app.use("/user",auth,authRoutes)
//prop
app.use("/prop",auth,propRoutes)

app.listen(8000,()=>console.log("Server Started"))
