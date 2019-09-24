//import mongoose
const mongoose = require('mongoose');
//Connect to MongoDB
mongoose.connect('mongodb://localhost/mongo-exercises',{useNewUrlParser:true})
        .then(() => console.log('Connected to MongoDB Database'))
        .catch(err => console.log('Could not connect to MongoDb',err));
//Create a Schema
const exerciseSchema = new mongoose.Schema({
    name: String,
    author:String,
    tags: [ String ],
    isPublished : Boolean,
    Date : {type : Date,default:Date.now},
    price : Number
},{collection:'courses'});
//Define a model for created schema
const Course = mongoose.model('Course',exerciseSchema);
//Query
async function getDetails(){
   const details = await Course.find({isPublished:true,tags:{$in : ['frontend','backend']}}).sort('-price').select('name author price');
   console.log(details);
}
getDetails();
