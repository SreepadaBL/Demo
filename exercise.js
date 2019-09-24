//import mongoose
const mongoose = require('mongoose');
//Connect to mongodb
mongoose.connect('mongodb://localhost/mongo-exercises',{useNewUrlParser:true})
        .then(() => console.log('Connected to Mongodb'))
        .catch(err => console.log('Could not connect to MongoDB',err));
//Create a Scehema
const exerciseSchema = new mongoose.Schema({
    name : {type:String,required:true},
    author : String,
    tags : [ String],
    isPublished : Boolean,
    price : Number,
    date : {type : Date,default: Date.now}
},{ collection : 'courses' });
//Define Model for created Schema
const Course = mongoose.model('Course',exerciseSchema);
//query
async function getDetails(){
    const result = await Course.find({isPublished:true,tags :{$in : ['backend']} })
                    .sort({name:1})
                    .select({name:1,author:1});
    console.log(result);
}
getDetails();
