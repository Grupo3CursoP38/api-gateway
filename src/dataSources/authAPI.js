const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');


class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    //User Services
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('/user/', user);
    }

    async getUserById(userId) {
        return await this.get(`/user/getMyInfo/${userId}/`);
    }

    async updateUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id;
        return await this.patch(`/user/updateUser/${userId}/`, user);
    }

    async deactiveUser(userId) {
        return await this.delete(`/user/deactiveUser/${userId}/`);
    }

    async deleteUser(userId) {
        return await this.delete(`/user/deleteUser/${userId}/`);
    }

    //Login and Refresh token
    async logIn(credentials) {
        credentials = new Object(credentials);
        return await this.post('/login/', credentials);
    }
    async refreshToken(token) {
        token = new Object(token);
        return await this.post('/refresh/', token);
    }
}

module.exports = AuthAPI;