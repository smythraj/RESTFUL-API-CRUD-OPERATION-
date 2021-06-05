const express=require('express')
const app=express()
require("../src/db/connection")
const port=process.env.PORT|| 3000
app.use(express.json())
const Student=require("./db/models/students")
//create a new students
const studentRouter=require('../src/router/student')
app.use(studentRouter)
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})