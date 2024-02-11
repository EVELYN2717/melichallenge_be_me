
const axios = require('axios');
const productDetail = async (id) => {
    try {
        const response = await axios.get("https://api.mercadolibre.com/items/".concat(id,'/description'););
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

module.exports = {productDetail};