

const productlistService = require("../../core/productlist/productlistService")

const productList = async (req, res, next) => {
    const response = await productlistService.productList();
    await res.json(response);
}

module.exports = {productList};