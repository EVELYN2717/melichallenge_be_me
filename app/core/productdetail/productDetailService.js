
const axios = require('axios');
const productDetail = async (id) => {
    const url = "https://api.mercadolibre.com/items/".concat(id,'/description');

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

module.exports = {productDetail};