
const axios = require('axios');
const searchBox = async () => {
    const url = "https://api.mercadolibre.com/items/MLA1579172896/description";

    try {
        const response = await axios.get(url);
        return {...response.data,
                author: {
                    name: 'EVELYN',
                    lastname: "GUTIERREZ"
                }}
    } catch (error) {
        return error;
    }
}

module.exports = {searchBox};