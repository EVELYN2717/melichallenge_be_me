

const searchBoxService = require('../../core/searchbox/searchBoxService');

const searchBox = async (req, res, next) => {
    const response = await searchBoxService.searchBox();
    await res.json(response);
}

module.exports = {searchBox};