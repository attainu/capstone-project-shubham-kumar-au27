const express = require('express');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

async function initMongoDB(){
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true},(err) =>{
        if (err) {
            console.log('error in connecting DB')
        } else{
            console.log('successfully-connected-to-db')
        }
    })
}
initMongoDB()



app.listen(port,console.log(`listening on port ${8080}..`));

