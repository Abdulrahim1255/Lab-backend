class CustomError extends Error{
    constructor(status,message){
        super()
       this.status=404
       data={
        message:message,
        originalMessage:error.message
       }

    }
    static Invalid(message){
        return new CustomError({message:'Invalid Error'})
    }





    
}

export default CustomError