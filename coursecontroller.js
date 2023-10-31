const CourseModel=require("../Models/coursemodel");
const Validator=require("./Validation.js");
let jwt = require("jsonwebtoken")


let createCourse=async(req,res)=>{
    try{
let data=req.body;
if(!Validator.isValidBody(data)){
    return res.status(404).send({msg:"No data provided"});
}

let {Course_Name,Description,Credit,Duration} = data
//course name validation
if(!Validator.isValid(Course_Name)){
    return res.status(400).send({msg:"Course name is required"});
}
let sameName = await CourseModel.findOne({Course_Name})
if (sameName){
    return res.status(400).send({msg: "This course already exists"});
}
if(!Validator.isValidName.test(Course_Name)){
    return res.status(400).send({msg:"Invalid course name"});
}

//description validation
if(!Validator.isValid(Description)){
    return res.status(400).send({msg:"Description is required"});
}
let sameDesc = await CourseModel.findOne({Description})
if (sameDesc){
    return res.status(400).send({msg: "This description already exists"});
}

//Credit validation
if(!Validator.isValid(Credit)){
    return res.status(400).send({msg:"Credit is required"});
}
// if(!Validator.isValidCredit.test(Credit)){
//     return res.status(400).send({msg:"Invalid credit"});
// }

//Duration validation
if(!Validator.isValid(Duration)){
    return res.status(400).send({msg:"Duration is required"});
}
// if(!Validator.isValidDuration.test(Duration)){
//     return res.status(400).send({msg:"Invalid duration"});
// }

let register=await CourseModel.create(data);
return res.status(201).send({status:true,msg:"Course Registered Successfully",data:register,
});
    }catch(error){return res.status(500).send({status:false,msg:"Internal Server Error"});
    }
};

module.exports={createCourse};