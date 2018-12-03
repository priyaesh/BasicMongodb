const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/Tutorials";


mongoClient.connect(url,function(error,db){

    if(error){
        console.log(error);
     }else{
         console.log("db connected");

     }

})
