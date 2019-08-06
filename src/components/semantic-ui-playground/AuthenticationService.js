
class AuthenticationService {

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null) return false
        return true;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    registerSuccessfulLogin(username, password) {
        console.log('Successful login. Check session storage.');
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()