const express = require("express")
const USER = require("../models/user")
const {getUsers,handleSignup,handleLogin}=require("../controller/userController")

const userRouter = express.Router()


//get all users

// userRouter.get("/users",getUsers)


//create user
userRouter.post("/signup",handleSignup)

//login user
userRouter.post("/login",handleLogin)




module.exports=userRouter