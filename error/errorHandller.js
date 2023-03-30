import { valid } from "joi"
// import CustomError from "./customError.js"



const errorhandller=(error,req,res,next)=>{
    let statusCode =400
    const data={
     message:"Internel Server Error",
     orignalError:error.message
    }


 if(error instanceof valid){
    statusCode
    data={
   message:error.message     
    }
 }
 if(error instanceof CustomError){
    res.status(error.status).json({message:error.message})
 }

 res.status(statusCode).json(data)


}
export default errorhandller