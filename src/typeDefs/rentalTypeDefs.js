const { gql } = require('apollo-server');

const rentalTypes = gql `

    type RentalDetail {
        id: String!
        date_finish: String!
        date_start: String!
        user_id: Int!
        vehicle_id: Int!
    }

    type RentalInput {
        id: String!
        date_finish: String!
        date_start: String!
        is_active: Boolean!
        user_id: Int!
        vehicle_id: Int!
    }

    type RentalFinish {
        id: String!
        is_active: Boolean!
    }

    extend type Query {
        rentalDetailById(rentalId: Int!): RentalDetail!
        rentalsByUserId(userId: Int!): [RentalDetail]
    }
 
    extend type Mutation {
        createRental(rental: RentalInput!): RentalDetail
        finishRental(rental: RentalFinish!): RentalDetail

    }

`;

module.exports = rentalTypes;