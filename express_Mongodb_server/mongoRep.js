const mongoose = require('mongoose'); //singleton
const userSchema = new mongoose.Schema({
    name: String
});
let User = mongoose.model('myUser', userSchema);
//automatic create collection in db with name "myUser"

const getUsersMongo = (name) => {
    if (name) return User.find({name: new RegExp(name)});
    return User.find();
};
const getUsersMongoById = (id) => {
    console.log('id: ' + id);
    return User.find({_id: id});
};
const deleteUsersMongo = (id) => {
    return User.deleteOne({_id: id});
};
const updateUsersMongo = (id, name) => {
    return User.update({_id: id}, {name: name});
};
const addUserMongo = (name) => {
    let newUser = new User({name});
    return newUser.save();
};

exports.getUsersMongo = getUsersMongo;
exports.addUserMongo = addUserMongo;
exports.deleteUsersMongo = deleteUsersMongo;
exports.getUsersMongoById = getUsersMongoById;
exports.updateUsersMongo = updateUsersMongo;