
const axios = require('axios');
const productList = async () => {
    const url = "https://api.mercadolibre.com/items/MLA1579172896";

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