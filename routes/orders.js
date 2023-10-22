var express = require('express');

var router = express.Router();

router.post('/', function (req, res, next) {
    res.send(req.body);
});

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/:id', function (req, res, next) {
    res.send('respond with a resource' + req.params.id);
});

module.exports = router;