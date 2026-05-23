const express = require("express")

const app = express()

const cors = require("cors")

var defemail = "admin123@gmail.com"
var defpass = "1234"

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login",function(req,res)
{
    if(req.body.email === defemail && req.body.password === defpass)
    {
         res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(5000,()=>{
    console.log("Server is Running in Port 5000......")
})