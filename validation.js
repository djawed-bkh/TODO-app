const Joi = require('@hapi/joi');



const ContentValidation = (data)=>{

    const schema = Joi.object({ content: Joi.string() .min(6).required() 
         
        });

       return schema.validate(data);

}




module.exports.ContentValidation =ContentValidation;