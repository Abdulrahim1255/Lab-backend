import Joi from "joi"
import Lab from '../Model/lab'



const labController={


    async alllab(req,res,next){
        let lab;
        try{
            lab= await Lab.find()

            if(!lab){
                return next(new Error('Lab data is not Available'))
            }

        }catch(error){
            return next(error)
        }

        res.json(lab)
    },



    async addlab(req,res,next){
        const labsectionSchema= Joi.object({
            labSelection:Joi.string().required()
        })

        const{error}= labsectionSchema.validate(req.body)
        if(error){
            return next(new Error('All filed are required.'))
        }

        const {labSelection}=req.body
        let labsec;
        try{
            labsec = await Lab.create({
            labSelection

          })
          if(!labsec){
            return next(new Error('LabSelection is empty'))
          }
        }catch(error){
            return next(error)
        }
        console.log(labsec)
        res.json(labsec)

    },

    async deletelab(req,res,next){
        let labdelete;
        try{
            labdelete= await Lab.findByIdAndRemove({_id:req.params.id})
         if(!labdelete){
             return next(new Error('Noting to delete'))
         }
     
        }catch(error){
         return next(error)
        }
        res.json(labdelete)
     
     
       }

}


export default labController