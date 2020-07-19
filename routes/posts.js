const route = require('express').Router();
const joi = require('@hapi/joi');

const model = require('../models/todo');

const {ContentValidation} = require('../validation');



// display all tasks in database
route.get('/', async (req,res)=>{

    try{
        const contenu = await model.find();

        res.status(200).send(contenu);
    }catch(err){
        res.status(400).send({message : err });
    }
    
})


// display a specific task 

route.get('/:todoID', async (req,res)=>{
    try{
        const afficher = await model.findById(req.params.todoID);
        res.status(200).send({ _id : afficher._id,
            content : afficher.content
         });
    }catch(err){
        res.status(400).send({message:err});
    }
    
})






// Add a new task 
route.post('/todo', async (req,res)=>{

    //  verrifier que les donnés sont conforme au schema
    const {error} = await ContentValidation(req.body);
  if(error)  return res.status(400).send(error.details[0].message);


    
const donnees = new model ({
content : req.body.content,
date : req.body.date
});

try{
const sauvegarde = await  donnees.save();
res.status(200).send({ID_tache : sauvegarde._id});


}catch(err){()=>
    res.status(400).send(err);
}

})



//delete a task
route.delete('/:todoID', async (req,res)=>{
try{
const task= await model.remove({_id: req.params.todoID})
res.status(200).send()

}catch(err){
    res.status(400).send("OOPS ! something whent wrong !  try one more time ");
}


})



// Edit a task

route.patch('/',async (req,res)=>{

})




module.exports=route;