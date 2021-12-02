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

    type userInput {
        id: Int!
        email: String!
        name: String!
        lastname: String!
        phone: String!
        birthdate: String!
        password: String!
    }

    type UpdateUser {
        email: String!
        name: String!
        lastname: String!
        phone: String!
        birthdate: String!
    }
`;

module.exports = authTypes;