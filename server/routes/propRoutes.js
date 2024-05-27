const express = require("express")
const propRoutes = express.Router()
const PROP = require("../models/properties")

propRoutes.post("/post",(req,res)=>{
    console.log("---")
    console.log(req.user.user)
    const prop = PROP.create({
        title:req.body.title,
        description:req.body.description,
        type:req.body.type,
        price:req.body.price,
        area:req.body.area,
        bedrooms:req.body.bedrooms,
        address:req.body.address,
        avail:req.body.avail,
        city:req.body.city,
        createdBy:req.user.user._id,
        owner:req.user.user.name,
        number:req.user.user.number,
        imageUrls:req.user.user.imageUrls
    })
    res.json({"msg":"created",prop:prop})
})

propRoutes.post("/props", async (req,res)=>{
    const props = await PROP.find({city:req.body.city,type:req.body.type,avail:req.body.avail})
    console.log("req")
    res.json(props)
})

propRoutes.get("/myprop", async (req,res)=>{
    const prop = await PROP.find({createdBy:req.user.user._id})
    res.json(prop)
})


module.exports = propRoutes