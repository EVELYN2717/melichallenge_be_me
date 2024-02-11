
const axios = require('axios');
const searchBox = async (query) => {
    try {
        return axios.get("https://api.mercadolibre.com/sites/MLA/search?q=:".concat(query)).then( responseSearchBox => {
            const itemsResult = [];
            const categoriesResult = [];

            responseSearchBox.data.results.forEach(item => {
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

            responseSearchBox.data.available_filters.find( value => value.id === 'category').values.forEach( categories => {
                categoriesResult.push(categories.name);
            });

            return {
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