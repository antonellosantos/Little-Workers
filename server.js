const express = require("express")
const session = require("express-session")
const bodyparser = require("body-parser")
const hbs = require("hbs")
const cookieparser = require("cookie-parser")
const mongoose = require("mongoose")
const url = require("url")

const app = express()

const urlencoder = bodyparser.urlencoded({
    extended : false
})

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/littleWorkers_Db", {
    useNewUrlParser:true,
    useFindAndModify: false
})

const Userschema = mongoose.Schema({
    username : String,
    password : String,
    displayPicture : String,
    task : [{
        taskID : String,
        title : String,
        description : String,
        userID : String,
        attachedImage : String,
        date : Date,
        subject : String,
        commentNumber : String,
        upVote : String,
        downVote : String
    }]

});

const Taskschema = mongoose.Schema({
    title : String,
    description : String,
    userID : String,
    attachedImage : String,
    date : Date,
    subject : String,
    commentNumber : String,
    upVote : String,
    downVote : String
});

const CommentSchema = mongoose.Schema({
    userID : String,
    taskID : String,
    date : Date,
    content  : String,
    subject : String,
    upvote : String,
    downVote : String
});

app.use(express.static('public'));


app.get("/", (req,res)=>{
    res.render(__dirname + '/view/landingPage.hbs')
})

app.get("/register", (req,res)=>{ 
    res.render(__dirname + '/view/registerPage.hbs')
})

app.get("/login", (req,res)=>{ 
    res.render(__dirname + '/view/loginPage.hbs')
})

app.get("/dashboard", (req,res)=>{ 
    res.render(__dirname + '/view/dashboard.hbs')
})

app.post("/add", urlencoder,(req,res)=>{

})

app.post("/checkingAccount", urlencoder,(req,res)=>{

})

app.get("/profile", (req,res)=>{ //for testing purposes in order to view the page as you edit it
    res.render(__dirname + '/view/profilePage.hbs')
})

app.get("/editProfile", (req,res)=>{
    res.render(__dirname + '/view/editProfilePage.hbs')
})

app.listen(3000, ()=>{
    console.log("live at port 3000")
})