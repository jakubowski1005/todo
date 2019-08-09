import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants.js'

class UserService {

    retrieveAllUsers() {
        return axios.get(`${JPA_API_URL}/users`)
    }

    retrieveUser(id) {
        return axios.get(`${JPA_API_URL}/users/${id}`)
    }

    deleteUser(id) {
        return axios.delete(`${JPA_API_URL}/users/${id}`)
    }

    updateUser(id, user) {
        return axios.put(`${JPA_API_URL}/users/${id}`, user)
    }

    createUser(user) {
        return axios.post(`${JPA_API_URL}/users`, user)
    }
}

export default new UserService()