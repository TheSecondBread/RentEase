const USER = require("../models/user");
const jwt = require("jsonwebtoken")
const secret = "slkdjflaksdfjlsdkfl"



async function handleSignup(req,res){
    console.log("req received")
    await USER.create({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    })
    res.json({msg:"created",user:req.body})
}

async function handleLogin(req,res){
    console.log("req received")
    const user = await USER.findOne({email:req.body.email,password:req.body.password})
    if(!user){
        res.json({msg:"invalid username or password"})
    }
    else{
        const token=jwt.sign({user},secret)
        res.json({"token":token})

    }


}


module.exports={handleSignup,handleLogin}