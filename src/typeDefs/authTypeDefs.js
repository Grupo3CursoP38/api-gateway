const { gql } = require('apollo-server');

//TODO Agregar password 2 (confirmación de las contraseña)
const authTypes = gql`

    type Tokens{
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    type Refresh {
        refresh: String!
    }

    type Credentials {
        email: String!
        password: String!
    }

    type SignUpInput {
        id: Int!
        email: String!
        name: String!
        lastname: String!
        phone: String!
        birthdate: String!
        password: String!
    }

    type UserDetail {
        id: Int!
        email: String!
        name: String!
        lastname: String!
        phone: String!
        birthdate: String!
    }

    type UserPartialUpdate {
        email: String
        name: String
        lastname: String
        phone: String
        birthdate: String
    }

    
    extend type Query {
        userDetailById(userId: Int!): UserDetail!
    }

    extend type Mutation {
        signUpUser(user: SignUpInput!): Tokens!
        logIn(credentials: Credentials!): Tokents!
        refreshToken(refresh : Refresh!): Access!
    }
`;

module.exports = authTypes;