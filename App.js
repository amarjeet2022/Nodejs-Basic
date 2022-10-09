const express = require("express")
const app = express()

app.get("/", (req, resp)=>{

    resp.send(`<h1>My first API creation <h1>`)
})
app.get("/employee", (req, resp)=>{

    resp.send(`<h1>My Second employee API creation <h1>`)
})
app.get("/worker", (req, resp)=>{

    resp.send(`<h1>My third worker API creation <h1>`)
})
app.listen(5000, (err)=>{
    if(err) throw err;
    console.log("Give me success")
})