const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const Port = process.env.PORT;
const DatabaseAPI = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

async function Main(){
    await mongoose.connect(DatabaseAPI)
    console.log('Connected to database')
    app.listen(Port , ()=> console.log('Server is running port'));
}

Main();