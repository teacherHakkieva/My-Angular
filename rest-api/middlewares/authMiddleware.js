const { validateToken } = require("../services/userService");

const authMiddleware = async (req, res, next) => {
    const token = req.headers['x-authorization'];
    if(token){
        try {
            const user = validateToken(token);
            req.user = {
                'username': user.username,
                '_id': user._id,
                token
            }
        } catch (error) {
            res.json(error);
            console.log(error);
        }
    }
    next();
}

module.exports = {
    authMiddleware,
}
