const {gql} = require('apollo-server');

const vehicleTypes = gql `

    type Vehicle {
        date_finish: String!,
        date_start: String!,
        id: String!,
        is_active: true,
        user_id: Int!,
        vehicle_id: Int!
    }

`;

module.exports = vehicleTypes;