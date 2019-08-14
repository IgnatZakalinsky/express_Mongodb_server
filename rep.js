const fs = require('fs');
const {readJSONFromFile, writeJSONFromFile} = require('./fsUtils');

const getUsers = () => {
    return readJSONFromFile('./users.json');
};

const addUser = async (name) => {
    let users = await getUsers();
    users.push({id: users.length, name: name});
    return writeJSONFromFile('./users.json', users)
};

exports.getUsers = getUsers;
exports.addUser = addUser;