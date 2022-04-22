// List of Dependencies
const path = require("path");
const fs = require("fs");
const util = require("util");
const express = require("express");


//Async Processes
//Promisify the fs.writefile/fs.readfile
const writeAsync = util.promisify(fs.writeFile);
const readAsync = util.promisify(fs.readFile);


//Set up the Server
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


//Middleware(static)
app.use(express.static('./develop/public'));

//API Routes = *API----------------------------------------

//"GET" request *API
app.get('/api/pets', (req, res) => {
    readAsync("/develop/db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

//"POST" request *API

//"DELETE" request *API

//END OF API ROUTES----------------------------------------

//HTML Routes

//App Listening
app.listen(PORT, function(){
    console.log("App listening on port" + PORT)
});

