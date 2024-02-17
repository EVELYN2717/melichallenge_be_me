
const axios = require('axios');
const {productDetail} = require("../productdetail/productDetailService");
const {productList} = require("../productlist/productListService");

const itemById = async (id) => {
    return productList(id).then( responseItemId => {
        return productDetail(id).then( responseItemDetail => {
            return {
                author: {
                    name: 'EVELYN',
                    lastname: 'GUTIERREZ'
                },
                item:{
                    id: responseItemId.id,
                    title: responseItemId.title,
                    category_id: responseItemId.category_id,
                    price:{
                        currency: responseItemId.currency_id,
                        amount: responseItemId.price,
                        decimal: 0
                    },
                    picture: responseItemId.pictures.length > 0 ? responseItemId.pictures[0].secure_url : 'Image NOT FOUND',
                    condition: responseItemId.condition,
                    free_shipping: responseItemId.shipping.free_shipping,
                    sold_quantity: responseItemId.initial_quantity,
                    description: responseItemDetail.plain_text.length > 0 ? responseItemDetail.plain_text : 'Description NOT FOUND'
                }
            }
        });
    }, (reason) => {
    });
}

module.exports = {itemById}