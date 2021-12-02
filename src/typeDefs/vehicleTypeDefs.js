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

    type VehicleInput {
        id: Int!
        type: String!
        name: String!
        short_description: String!
        long_description: String!
        color: String!
        img_url: String!
    }

    type VehiclePartialUpdate{
        type: String
        name: String
        short_description: String
        long_description: String
        color: String
        img_url: String
        is_active: Boolean
    }

    
    extend type Query {
        vehicleDetailById(vehicleId: Int!): VehicleDetail!
        vehiclesByType(type: String!): [VehicleDetail]
        getVehicles(): [VehicleDetail]
    }
 
    extend type Mutation {
        createVehicle(vehicle: VehicleInput!): VehicleDetail
        updateVehicle(vehicle: VehiclePartialUpdate!): VehicleDetail
        deleteVehicle(vehicleId : Int!): String
        deactiveVehicle(vehicleId : Int!): String
    }

`;

//TODO Crear servicio de obtener vehiculos por tipo de vehiculo (bicicleta o patineta)

module.exports = vehicleTypes;