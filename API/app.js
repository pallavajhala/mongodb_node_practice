const express = require("express")
const { appendFile } = require("fs")
const dotenv = require("dotenv").config()
const port = process.env.PORT
const connectDB = require("./config/db")

connectDB()

const app = express()

app.use("/goals",require("./Routes/routes1"))

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})