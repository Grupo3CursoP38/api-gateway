const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');


class RentalApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.rental_api_url;
    }

    //Rental Services
    async createRental(rental) {
        rental = new Object(JSON.parse(JSON.stringify(rental)));
        return await this.post('​/rental', rental);
    }

    async getRentalById(rentalId) {
        return await this.get(`/rental/${rentalId}/`);
    }

    //TODO CREAR SERVICIO PARA TRAER RENTAS POR userId
    async getRentalsByUserId(userId) {
        return await this.get(`/rental/${userId}/`);
    }

    async getRentals() {
        return await this.get('​/rental');
    }

    async finishRental(cancelRental) {
        cancelRental = new Object(JSON.parse(JSON.stringify(cancelRental)));
        let rentalId = cancelRental.id;
        return await this.put(`/rental/${rentalId}/`, cancelRental);
    }

}

module.exports = RentalApi;