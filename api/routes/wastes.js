var router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const secure = require('../secure');

const wasteSchema = Joi.object({
    type: Joi.string().max(100).required(),
    quantity: Joi.number().required()
});

router.post('/', secure({status:'verified'}),async (req, res) => {
    let validated = wasteSchema.validate(req.body);

    if (validated.error) {
        return res.status(400).json({ error: "request.invalid" });
    }

    try {
        let waste = {
            ...validated.value,
            userID: req.user.id
        };
        await knex('wastes').insert(waste);
        return res.sendStatus(201);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server.error" });
    }
});

router.get('/', secure({status:'verified'}),async (req, res) => {
    try {
        let wastes = await knex('wastes').select('id','type','quantity').where('userID', req.user.id);
        return res.status(200).json(wastes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server.error" });
    }
});

module.exports = router; 