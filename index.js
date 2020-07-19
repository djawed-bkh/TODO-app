const express = require('express');
const dotenv =require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app =express();



dotenv.config();
// connection a la bdd
mongoose.connect(process.env.DB_CONNEXION,{ useNewUrlParser: true },(err)=>{
if(err) {console.log("probleme de connexion a la bdd");
}else{


    console.log("connexion a la bdd reussie");

}
})

const route = require('./routes/posts');


// middlewares
app.use(bodyParser.json());
app.use('/api',route);




app.listen(3000, ()=> console.log("le serveur est en ecoute"));