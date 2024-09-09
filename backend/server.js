require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const workoutRouter = require('./routes/workouts')


//express app
 const app = express()
// middleware
app.use(express.json())
 app.use((req,res,next)=>{
   console.log(req.path,req.method)
   next()
   
 })
// routes
 app.use('/api/workouts',workoutRouter)

 //connect db
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
   // listen for requests
   app.listen(process.env.PORT,()=>{
   console.log('connecting to db and  listening to port' ,process.env.PORT)
});

 })
 .catch((error)=>{
   console.log(error)
 })

 