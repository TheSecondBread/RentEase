const express = require("express")

const {getProfile}=require("../controller/authController")
const authRoutes = express.Router()

authRoutes.get("/profile",getProfile)





module.exports=authRoutes