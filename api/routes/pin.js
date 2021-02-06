var router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const secure = require('../secure');

const pinSchema = Joi.object({
    pin: Joi.string().length(6).pattern(/^[0-9]+$/).required()
});

router.post('/', secure({status:'connecting'}),async (req, res) => {
    let validated = pinSchema.validate(req.body);

    if (validated.error) {
        return res.status(400).json({ error: "request.invalid" });
    }


    try {
        const user = await knex('users').select('*').where({ id: req.user.id }).first();

        if(user.pin == validated.value.pin){
            let status = 'verified';
            if(!user.firstname || !user.lastname){
                status = 'require-info'
            }

            await knex('users').update('pin', null).where('id', req.user.id);
            let token = jwt.sign({
                id: req.user.id,
                status
            },
                process.env.PRIVATE_KEY,
                { algorithm: 'RS256', expiresIn: 365 * 24 * 60 * 60 }
            );
            return res.status(200).json({token, status});
        }

        return res.status(400).json({error:"pin.wrong"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server.error" });
    }
});

module.exports = router; 