
const axios = require('axios');
const searchBox = async (query) => {
    try {
        return axios.get("https://api.mercadolibre.com/sites/MLA/search?q=:".concat(query)).then( responseSearchBox => {
            const itemsResult = [];
            const categoriesResult = [];
            const LIMIT_RESULTS = 4;
            let idx = 0;

            while (idx < LIMIT_RESULTS && responseSearchBox.data.results[idx] !== undefined) {
                    itemsResult.push({
                        id: responseSearchBox.data.results[idx].id,
                        title: responseSearchBox.data.results[idx].title,
                        price: {
                            currency: responseSearchBox.data.results[idx].currency,
                            amount: responseSearchBox.data.results[idx].price,
                            decimals: 0
                        },
                        picture: responseSearchBox.data.results[idx].thumbnail.length > 0
                            ? responseSearchBox.data.results[idx].thumbnail : 'Image NOT FOUND',
                        condition: responseSearchBox.data.results[idx].condition,
                        free_shipping: responseSearchBox.data.results[idx].free_shipping
                    });
                    idx++;
            }

            const availableFilterExists = responseSearchBox.data.available_filters.find( filters => filters.id === 'category');
            availableFilterExists === undefined
                ?
                responseSearchBox.data.filters.find( value => value.id === 'category') === undefined ? categoriesResult.push('Categories Not Found'):
                responseSearchBox.data.filters.find( value => value.id === 'category').values.forEach(categories =>
                    categories.path_from_root.forEach( path => categoriesResult.push(path.name)))
                : availableFilterExists.values.forEach( categories =>
                    categoriesResult.push(categories.name));

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