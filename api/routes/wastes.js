var router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const secure = require('../secure');
const multer = require('multer');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    endpoint: process.env.S3_ENDPOINT,
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    s3ForcePathStyle: true
});

var upload = multer({ storage: multer.memoryStorage() }).single('image');

const wasteSchema = Joi.object({
    type: Joi.string().max(100).required(),
    quantity: Joi.number().required()
});

router.post('/', secure({status:'verified'}), upload, async (req, res) => {
    let validated = wasteSchema.validate(req.body);

    if (validated.error) {
        return res.status(400).json({ error: "request.invalid" });
    }

    try {
        let waste = {
            type: validated.value.type,
            quantity: Number(validated.value.quantity),
            createdDate: new Date(),
            userID: req.user.id,
            status: 1
        };
        let id = (await knex('wastes').returning('id').insert(waste))[0];
        if(req.file){
            await s3.upload({ Bucket: 'ecoco', Key: `images/${id}.jpg`, Body: req.file.buffer }).promise();
        }
        console.log(id);
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