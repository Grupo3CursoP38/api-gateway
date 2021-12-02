const { gql } = require('apollo-server');

const rentalTypes = gql `

    type Rental {
        id: String!
        date_finish: String!
        date_start: String!
        is_active: true
        user_id: Int!
        vehicle_id: Int!
    }

`;

module.exports = rentalTypes;