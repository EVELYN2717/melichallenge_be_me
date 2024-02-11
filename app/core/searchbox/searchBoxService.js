
const axios = require('axios');
const searchBox = async (query) => {
    try {
        const itemsResult = [];
        const categoriesResult = [];
        return axios.get("https://api.mercadolibre.com/sites/MLA/search?q=:".concat(query)).then( responseSearchBox => {

            responseSearchBox.data.results.forEach( item => {
                categoriesResult.push(item.category_id);
                itemsResult.push({
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency,
                        amount: item.price,
                        decimals: 0
                    },
                    picture: item.thumbnail.length > 0 ? item.thumbnail : 'Image NOT FOUND',
                    condition: item.condition,
                    free_shipping: item.free_shipping
                });
            });

            return  {
                author: {
                    name: 'EVELYN',
                    lastname: "GUTIERREZ"
                },
                categories: [...new Set(categoriesResult)],
                items: itemsResult
            }
        });

    } catch (error) {
        return error;
    }
}

module.exports = {searchBox};