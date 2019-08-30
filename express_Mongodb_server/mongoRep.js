const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String
});

let User = mongoose.model('myUser', userSchema);

const getUsersMongo = () => {
    return User.find();
};

const addUserMongo = (name) => {
    let newUser = new User({name});
    return newUser.save();
};

exports.getUsersMongo = getUsersMongo;
exports.addUserMongo = addUserMongo;