import axios from 'axios';
import {API_URL} from '../../Constants.js'


class HelloWorldService {
    executeHelloWorldService() {
        return axios.get(`${API_URL}/hello`)
        //console.log('execute service')
    }

    executeHelloWorldBeanService() {
        return axios.get(`${API_URL}/hello-world-bean`)
    }

    executeHelloWorldPathVariableService(variable) {
        return axios.get(`${API_URL}/hello-world-bean/path-variable/${variable}`);
    }
}

export default new HelloWorldService()