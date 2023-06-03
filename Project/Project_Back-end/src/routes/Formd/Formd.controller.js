const express= require("express");
const FormData= require("../../models/FormData")
const router= express.Router()

router.get("/", async (req,res)=>{
    const data= await FormData.find()
    res.status(200).send(data)
})
router.post("/", async (req,res)=>{
    const pylod= req.body;
    let dataStore= new FormData(pylod);
    data= await dataStore.save()
    res.status(200).send(data)
});
module.exports=router;