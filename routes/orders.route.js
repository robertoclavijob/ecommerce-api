var express = require('express');
const {findOne, findAll, create } = require('../services/orders.service');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const newOrder = await create(req.body);
    res.send(newOrder);
});

router.get('/', async function (req, res, next) {
    const attributes = req.query.attributes;

    const limit = req.query.limit && Number(req.query.limit);
    const offset = req.query.offset && Number(req.query.offset);

    const orders = await findAll({attributes, limit, offset});
    res.send(orders);
});

router.get('/:id', async function (req, res, next) {
    const order = await findOne(req.params.id);
    res.send(order);
});

module.exports = router;