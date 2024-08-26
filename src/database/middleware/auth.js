const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Access Denied'});
    }

    try{
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch(err){
        res.status(400).json({ message: 'Invaid Token'});
    }
};

module.exports = authMiddleware;