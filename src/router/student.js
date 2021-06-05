const express=require('express')
const router=express.Router()
const Student=require("../db/models/students")
router.post('/student',async(req,res)=>{
    try{
        console.log(req.body)
        const user=new Student(req.body)
        const createuser=await user.save()
        
        res.status(201).send(createuser)
    }
    catch(e){
        res.status(400).send(e)
    }


//res.send('Hello from the other side ')
})


router.get("/student",async(req,res)=>{
    try{
        const StudentData=await Student.find()
        res.send(StudentData)
    }
    catch(e){
        res.status(401).send(e)
    }
})

router.get('/student/:id',async(req,res)=>{
    try{
const id=req.params.id
//console.log(req.params)
//res.send(req.params.id)
const studentsdata=await Student.findById(id)
if(!studentsdata){
    return res.status(401).send('not found')
}
else
{
    res.send(studentsdata)
}

    }
    catch(e){
        res.status(401).send(e)
    }
})

router.delete("/student/:id",async(req,res)=>{
try{

const deleteStudent =await Student.findByIdAndDelete(req.params.id)
if(!req.params.id){
    return res.status(400).send()
    console.log(req.params.id)
}
else{
    
 res.send(deleteStudent)
 console.log(deleteStudent)
}
}
catch(e){
    res.status(501).send(e)
}
})

router.patch("/student/:id",async(req,res)=>{
    try{
const id=req.params.id
const updatStudent=await Student.findByIdAndUpdate(id,req.body,{
    new:true
})
res.send(updatStudent)

    }
    catch(e){
        res.status(400).send(e)
    }
})













module.exports=router