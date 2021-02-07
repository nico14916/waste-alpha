var router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const secure = require('../secure');

const profileSchema = Joi.object({
    firstname: Joi.string().max(100).required(),
    lastname: Joi.string().max(100).required(),
    postalCode: Joi.string().max(6).required(),
    address: Joi.string().max(100).required()
});

router.post('/', secure({ status: 'require-info' }), async (req, res) => {
    let validated = profileSchema.validate(req.body);

    if (validated.error) {
        return res.status(400).json({ error: "request.invalid" });
    }


    try {
        await knex('users').update(validated.value).where('id', req.user.id);

        let token = jwt.sign({
            id: req.user.id,
            status: "verified"
        },
            process.env.PRIVATE_KEY,
            { algorithm: 'RS256', expiresIn: 365 * 24 * 60 * 60 }
        );
        return res.status(200).json({ token, status: "verified" });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server.error" });
    }
});

module.exports = router; 