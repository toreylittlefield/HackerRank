var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res) => {

    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);

    if (!limit) {
        limit = 3;
    }

    if (!page) {
        page = 1;
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = recipes.slice(startIndex, endIndex);
    res.json(results);
});

module.exports = router;