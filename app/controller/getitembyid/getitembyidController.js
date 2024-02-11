

const getItemByIdService = require('../../core/getitembyid/getitembyidService');

const getItemById = async (req, res, next) => {
    await res.json(await getItemByIdService.itemById(req.params.itemId));
}

module.exports = {getItemById};

