// import express from "express";
// import path from "path";
const express = require("express");
const fs = require("fs");
const path = require("path");

//path
const dirPath = path.join(__dirname, "timeStamp");
         // console.log("dirpath",dirPath);

// initializing express server
const app = express();

//middlewar
app.use(express.static("timestamp"));

//api's

app.get("/Task",(req,res)=>{
    let time = new Date();
let dataString = time.toUTCString().slice(0,-3);
           // console.log(dataString);

const timeStamp = `last created timeStamp:${dataString}`

    fs.writeFile(`${dirPath}/date-time.txt`,timeStamp,(err)=>{
        console.log("File Created");
    })
        res.sendFile(path.join(__dirname,"timestamp/date-time.txt" ));
    })

// set server to listen under port : 1819
app.listen(1819, ()=>console.log(`server started in localhost:1819`));
