const { verify } = require("jsonwebtoken");
const jwtKey = require("../config/jwt-key");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");

        if (token) {
            token = token.slice(7);
            verify(token, jwtKey, (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Invalid token",
                    });
                } else {
                    next();
                }
            });
        } else {
            res.json({
                success: 0,
                message: "Access denied unauthorized user",
            });
        }
    },
};
