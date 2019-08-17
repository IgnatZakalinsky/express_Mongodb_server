let {getUsers, addUser} = require('./rep.js');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', async (req, res) => {
    let users = await getUsers();
    if (req.query.name) users = users.find(u => u.name === req.query.name);
    console.log(req.query.name);

    console.log(users);
    res.send(JSON.stringify(users));
});

router.get('/:id', async (req, res) => {
    let users = await getUsers();
    users = users.find(u => u.id == req.params.id);

    console.log(req.params.id);
    if (users) res.send(JSON.stringify(users));
    else res.send(404);
});


router.post('/', async (req, res) => {
    console.log(req.body.name);
    let result = await addUser(req.body.name);
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