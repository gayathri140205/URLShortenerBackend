const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const shortUrl = require("./routes/route")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/" , shortUrl)

app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"URL Shortened Successfully"
    })
})

module.exports = app