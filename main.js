import axios from 'axios'

class Api {
    static async getAddress (user) {
    const response = await axios.get('https://senaiuserapi.herokuapp.com/${user}')
    return response ;

    }
}

Api.getAddress('user')