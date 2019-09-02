//const http = require('http'); // use modul
//const {usersController} = require('./usersController.js');
//const {getUsers, addUser} = require('./rep.js');

const express = require('express');
const app = express();
const users = require('./usersController');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
//automatic create db with name "my_database"

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//route
app.use('/', users);

//default
app.use((req, res) => {
    res.send(404);
});

//start
app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});
console.log('start...');

process.on('unhandledRejection', (reason, p) => {
   console.log(reason, p);
});

/*const cors = (req, res) => {
// Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false;
};*/

/*let server = http.createServer((req, res) => { // create server
    console.log('some req');

    if (cors(req, res)) return;

    switch (req.url) {
        case '/':
            usersController(req, res);
            break;
        default:
            res.write(`error404`);
            res.end();
    }
});

server.listen(7542); // start server*/