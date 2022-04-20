
 var mongoose=require("mongoose")
const studentSchema = new mongoose.Schema({
    name: String,
    enroll: Number,
    courseId: Number
});
const student = mongoose.model("student",studentSchema)
module.exports={student}