const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');


class VehicleApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.vehicles_api_url;
    }

    //Vehicle Services
    async createVehicle(vehicle) {
        vehicle = new Object(JSON.parse(JSON.stringify(vehicle)));
        return await this.post('​/vehicles​/vehicles​/', vehicle);
    }

    async getVehicleById(vehicleId) {
        return await this.get(`/vehicles​/vehicles​/${vehicleId}/`);
    }

    async getVehicles() {
        return await this.get(`/vehicles​/vehicles​/`);
    }

    async updateVehicle(vehicle) {
        vehicle = new Object(JSON.parse(JSON.stringify(vehicle)));
        let vehicleId = vehicle.id;
        return await this.patch(`/vehicles​/vehicles​/${vehicleId}/`, vehicle);
    }

    async deactiveVehicle(vehicleId) {
        return await this.delete(`/vehicles/deactiveVehicle/${vehicleId}/`);
    }

    async deleteVehicle(vehicleId) {
        return await this.delete(`/vehicles​/vehicles​/${vehicleId}/`);
    }
}

module.exports = VehicleApi;