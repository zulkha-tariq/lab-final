const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Employee = mongoose.model(
"Employee",
new mongoose.Schema({
    name:String,
    email:String,
    department:String
})
);

router.get("/", async(req,res)=>{

    const employees =
    await Employee.find();

    res.json(employees);
});

router.post("/", async(req,res)=>{

    const employee =
    await Employee.create(req.body);

    res.json(employee);
});

router.put("/:id", async(req,res)=>{

    const employee =
    await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.json(employee);
});

router.delete("/:id", async(req,res)=>{

    await Employee.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Deleted"
    });
});

module.exports = router;