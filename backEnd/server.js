
const express = require('express');
const app     = express();
const server  = app.listen(1337, ()=>{console.log("Server listening on 1337")});

app.use(express.static(__dirname+'/frontEnd'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/frontEnd/main.html");
})