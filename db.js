const mongoose = require("mongoose");
console.log("Connecting to MongoDB...");
mongoose.connect("mongodb+srv://shubhambhoye92:Shubham%4000092@cluster0.uxzhuur.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    email:{type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

});

const adminSchema = new Schema({
    email:{type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    titel: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}