import express from 'express'
import mongoose from 'mongoose'
import errorhandller from './error/errorHandller'
import Router from './Router'
const bodyParser = require('body-parser')
const cors = require('cors')
const app= express()
const PORT= 3002



mongoose.connect('mongodb+srv://admin:admin@test-inventory.5rzqf4o.mongodb.net/?retryWrites=true&w=majority',(error)=>{
if(error){

    console.log(error)
}else{
    console.log('WE are Connect to the Data Base')
}
})



app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',Router)



app.use(errorhandller)


app.listen(PORT,()=>{
    console.log('App Running On 3002')

})