var express = require('express');
const {findOne, findAll, create, remove, update } = require('../services/product.service');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const newProduct = await create(req.body);
    res.send(newProduct);
});

router.get('/', async function (req, res, next) {
    const attributes = req.query.attributes;

    const limit = req.query.limit && Number(req.query.limit);
    const offset = req.query.offset && Number(req.query.offset);

    const products = await findAll({attributes, limit, offset});
    res.send(products);
});

router.get('/:id', async function (req, res, next) {
    const product = await findOne(req.params.id);
    res.send(product);
});

router.patch('/:id', async function (req, res, next) {
    const productUpdated = await update(req.params.id, req.body);
    res.send(productUpdated);
});

router.delete('/:id', async function (req, res, next) {
    await remove(req.params.id);
    res.send(`Product with id ${req.params.id} successfully removed`);
});

module.exports = router;