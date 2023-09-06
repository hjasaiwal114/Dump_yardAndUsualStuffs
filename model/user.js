const Mangoose = require("mongoose")
const UserSchema = new Mangoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
      type: String,
      minlength: 0,
      required: true,
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
})

const User = Mongoose.mode("user", UserSchema)
module.exports = User