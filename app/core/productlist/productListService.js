
const axios = require('axios');
const productList = async (id) => {
    const url = "https://api.mercadolibre.com/items/".concat(id);

    try {
        const response = await axios.get(url);
        return {...response.data,
                author: {
                    name: 'EVELYN',
                    lastname: 'GUTIERREZ'
                }}
        } catch (error) {
            return error;
        }
}

module.exports = {productList};