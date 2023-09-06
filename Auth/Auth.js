const User = require("../model/User")

exports.register = async (req, res, next) => {
    const { username , password } = req.body;
    //  Check if the password length is less than 6 characters

    if (password.length < 6) {
        return res.status(400).json({message: "Password less than 6 characters" });
    }

    try {
        // Attempt to create a new user using the privided username and password
        await User.create({
            username,
            password,
        }).then((user) => 
           res.status(200).json({
            messgae: "user successfully created",
            user,
           })
        );
    } catch (err) {
        // Handle any errors that occu during user creation
        res.status(401).json({
            message: "User not successful created",
            error: err.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const { username, password} = req.body
    // Check if user name and password is provided 
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or password not persent",
        })
    }
}

exports.login = async( req. res, next) => {
    try {
        const user = await User.findOne({ username, password })
        if (!user) {
            res.status(401).json({
                message: "Login is not successful",
                error: "User not found",
            })
        } else {
            res.status(200).json({
                message: "Login successful",
                user,
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }

}