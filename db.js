const Mangoose = require("mongoose")
const local = 'mangodb://localhost:37-37/role_auth'
const connectDb = async() => {
    await Mangoose.connect(localDB, {
        userNewUrl: true;
        userUnifiedTopology: true,
    })
    console.log("MongoDb Connected")
}

module.exports.exports = connectDb