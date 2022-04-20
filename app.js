var mongoose = require('mongoose');
var {student}=require("./model.js")
var mongoose=require("mongoose")
mongoose.connect('mongodb+srv://nagaraju:Thandus@cluster0.vwm7k.mongodb.net/users?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
var db=mongoose.connection
db.on("error", error => {
    console.log('Problem connection to the database'+error);
});
db.once("open",callback=>{
    console.log('opened')

    const studentData = {
        name: "John",
        enroll: 1801,
        courseId: 01
    }
    
    student.create(studentData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
    
})




