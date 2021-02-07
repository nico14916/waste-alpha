var router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const secure = require('../secure');
const { date } = require('joi');

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
            createdDate: new Date(),
            userID: req.user.id,
            status: 1
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
        let query = knex('wastes').select('id','type','quantity','status','createdDate','pickupDate').where('userID', req.user.id);
        if(req.query.status == "done"){
            query = query.where('status', 2);
        }else{
            query = query.where('status', 1);
        }
        let wastes = await query;
        return res.status(200).json(wastes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server.error" });
    }
});

module.exports = router; 