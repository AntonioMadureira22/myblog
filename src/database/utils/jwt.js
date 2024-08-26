const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user,username}, 'marathon_monday_242424', {
        expiresIn: '1h',
    });
};

const verifyToken = (token) => {
    return jwt.verify(token,'marathon_monday_242424');
};

module.exports = { generateToken, verifyToken };