
const axios = require('axios');
const productList = async (id) => {
    try {
        const response = await axios.get("https://api.mercadolibre.com/items/".concat(id));
        return {...response.data,
                author: {
                    name: 'EVELYN',
                    lastname: 'GUTIERREZ'
        }
    }
    } catch (error) {
        return error;
    }
}

module.exports = {productList};