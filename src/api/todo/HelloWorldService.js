import axios from 'axios';


class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8081/hello')
        //console.log('execute service')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8081/hello-world-bean')
    }

    executeHelloWorldPathVariableService(variable) {
        return axios.get(`http://localhost:8081/hello-world-bean/path-variable/${variable}`);
    }
}

export default new HelloWorldService()