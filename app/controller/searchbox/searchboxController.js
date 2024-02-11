

const searchBoxService = require('../../core/searchbox/searchBoxService');

const searchBox = async (req, res, next) => {
    await res.json(await searchBoxService.searchBox(req.query.q));
}

module.exports = {searchBox};