const { gql } = require('apollo-server');

const vehicleTypes = gql`

    type VehicleDetail {
        id: Int!
        type: String!
        name: String!
        short_description: String!
        long_description: String!
        color: String!
        img_url: String!
        in_use: Boolean!
    }

    input VehicleInput {
        id: Int!
        type: String!
        name: String!
        short_description: String!
        long_description: String!
        color: String!
        img_url: String!
    }

    input VehiclePartialUpdate{
        id: Int!
        type: String
        name: String
        short_description: String
        long_description: String
        color: String
        img_url: String
        is_active: Boolean
    }

    
    extend type Query {
        getVehicleById(vehicleId: Int!): VehicleDetail!
        getVehiclesByType(type: String!): [VehicleDetail]
        getVehicles: [VehicleDetail]
    }
 
    extend type Mutation {
        createVehicle(vehicle: VehicleInput!): VehicleDetail
        updateVehicle(vehicle: VehiclePartialUpdate!): VehicleDetail
        deactiveVehicle(vehicleId: Int!): String
        deleteVehicle(vehicleId: Int!): String
    }

`;

//TODO Crear servicio de obtener vehiculos por tipo de vehiculo (bicicleta o patineta)

module.exports = vehicleTypes;