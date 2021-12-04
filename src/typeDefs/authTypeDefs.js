const { gql } = require('apollo-server');

//TODO Agregar password 2 (confirmación de las contraseña)
const authTypes = gql`

    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input Refresh {
        refresh: String!
    }

    input Credentials {
        email: String!
        password: String!
    }

    input SignUpInput {
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

    input UserPartialUpdate {
        id: Int!
        email: String
        name: String
        lastname: String
        phone: String
        birthdate: String
    }


    type Query {
        getUserById(userId: Int!): UserDetail!
    }

    type Mutation {
        createUser(user: SignUpInput!): Tokens!
        updateUser(user: UserPartialUpdate!): UserDetail!
        deactiveUser(userId: Int!): String
        deleteUser(userId: Int!): String
        logIn(credentials: Credentials!): Tokens!
        refreshToken(refresh: Refresh!): Access!
       
    }
`;

module.exports = authTypes;