import Joi from "joi"

import Item from "../Model/Item";
import bcrypt from 'bcrypt'
import jsonwebservise from "../error/jsonwebtoken"

const loginController={
   

async login(req,res,next){

    const loginSchma =Joi.object({
        email:Joi.string().required(),
                 password:Joi.string().required(),
    })


    const {error}= loginSchma.validate(req.body)
    if (error) {
      return next(error);
    }

// chek pass and email im the database....

try{  

  const user= await  Item.findOne({email:req.body.email});
  if(!user){
    return next(new Error('User not Found'))

  }
  const password = await bcrypt.compare(req.body.password,user.password)
  if(!password){
    return next(new Error('Password not Found'))

  }

  let access_jwt_token = jsonwebservise.sign({id:user._id})



  res.json({access_jwt_token})

}catch(err){
    return next(err)

}
  


}




}
export default loginController