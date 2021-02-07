var router = require('express').Router();
const knex = require('../knex');
const twilio = require('../twilio');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const connectSchema = Joi.object({
    email: Joi.string().email(),
    phone: Joi.string().min(10).max(11).pattern(/^[0-9]+$/).required(),
    password: Joi.string().min(8).max(40)
}).or('email', 'phone');

router.post('/', async (req, res) => {
    let validated = connectSchema.validate(req.body);

    if (validated.error) {
        return res.status(400).json({ error: "request.invalid" });
    }

    if (validated.value.phone) {
        try {
            const user = await knex('users').select('*').where({ phone: validated.value.phone }).first();
            const pin = Math.floor(100000 + Math.random() * 900000);
            let id;
            if (user) {
                await knex('users').update('pin', pin).where('id', user.id);
                id = user.id;
            } else {
                let newUser = await knex('users').returning('id').insert({
                    phone: validated.value.phone,
                    pin: pin
                });
                id = newUser[0];
            }
            twilio.messages.create({
                body: `Votre numéro de vérification est : ${pin}`,
                from: '+14387928040',
                to: validated.value.phone
            });
            let token = jwt.sign({
                id: id,
                status: 'connecting'
            },
                process.env.PRIVATE_KEY,
                { algorithm: 'RS256', expiresIn: 365 * 24 * 60 * 60 }
            );
            return res.status(200).json({token, status: 'connecting'});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "server.error" });
        }

    }

    return res.status(200).json(validated.value);
});

module.exports = router; 