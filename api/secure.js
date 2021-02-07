const jwt = require('jsonwebtoken');

module.exports = function (options) {
    return function (req, res, next) {
        if (!req.headers.authorization) return res.status(401).json({ message: "auth.invalid" });

        let decoded;
        try {
            decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.PUBLIC_KEY);
        } catch (err) {
            return res.status(401).json({ message: "auth.invalid" });
        }

        if (options) {
            if (options.status) {
                if (Array.isArray(options.status)) {
                    if (!options.status.includes(decoded.status)) {
                        return res.status(401).json({ message: "auth.unauthorised" });
                    }

                } else if (decoded.status !== options.status) {
                    return res.status(401).json({ message: "auth.unauthorised" });
                }
            }
        }

        req.user = { id: decoded.id };
        next();
    }
}