const express= require("express");
const Contact= require("../../models/Contactus")
const router= express.Router()

router.get("/", async (req,res)=>{
    const data= await Contact.find()
    res.status(200).send(data)
})
router.post("/", async (req,res)=>{
    const pylod= req.body;
    let dataStore= new Contact(pylod);
    data= await dataStore.save()
    res.status(200).send(data)
});
module.exports=router;