const {addUserMongo, getUsersMongo, deleteUsersMongo, getUsersMongoById, updateUsersMongo} = require("./mongoRep");
let {getUsers, addUser} = require('./rep.js');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/:id', async (req, res) => {
    let users = await getUsersMongoById(req.params.id);

    console.log(req.params.id);
    if (users) res.send(JSON.stringify(users));
    else res.send(404);
});
router.get('/', async (req, res) => {
    let users;
    if (req.query.name) {
        //users = [users.find(u => u.name === req.query.name)];
        users = await getUsersMongo(req.query.name);

        console.log('qery: ' + req.query.name);
    } else {
        //let users = await getUsers();
        users = await getUsersMongo();
    }

    console.log(users);
    res.send(JSON.stringify(users));
});
router.delete('/:id', async (req, res) => {
    await deleteUsersMongo(req.params.id);

    console.log(req.params.id);
    res.send(204);
});
router.post('/', async (req, res) => {
    console.log(req.body.name);
    //let result = await addUser(req.body.name);
    await addUserMongo(req.body.name);
    res.send(JSON.stringify({success: true}));
});
router.put('/', async (req, res) => {
    console.log(req.body.name);
    //let result = await addUser(req.body.name);
    await updateUsersMongo(req.body.id, req.body.name);
    res.send(JSON.stringify({success: true}));
});

module.exports = router;


/*exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        let result = await addUser('c');
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        let users = await getUsers();
        console.log(users);
        res.write(JSON.stringify(users));
        res.end();
    }
};*/