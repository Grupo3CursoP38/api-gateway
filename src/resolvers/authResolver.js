const userResolver = {

    Query: {

        getUserById: async (_, { userId }, { dataSources, userIdToken }) => {

            console.log("User id: " + userId + " | " + "User id Token: " + userIdToken)

            if (userId == userIdToken)
                return await dataSources.authAPI.getUserById(userId);
            else {
                console.log("El id de usuario enviado no coincide con el user id del token - getUserById")
                return null;
            }
        }
    },
    
    Mutation: {

        createUser: async (_, { user }, { dataSources }) => {

            const authInput = {
                id: user.id,
                email: user.email,
                name: user.name,
                lastname: user.lastname,
                phone: user.phone,
                birthdate: user.birthdate,
                password: user.password
            }

            return await dataSources.authAPI.createUser(authInput); //Devuelve el error en caso de haber.
        },

        updateUser: async (_, { user }, { dataSources, userIdToken }) => {

            if (user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else {
                console.log("El id de usuario enviado no coincide con el user id del token - updateUser")
                return null
            }
        },

        deactiveUser: async (_, { userId }, { dataSources, userIdToken }) => {

            if (userId == userIdToken) {
                await dataSources.authAPI.deactiveUser(userId);
                return "User has been deactivated"
            }
            else {
                console.log("El id de usuario enviado no coincide con el user id del token - deactiveUser")
                return null
            };
        },

        deleteUser: async (_, { userId }, { dataSources, userIdToken }) => {

            if (userId == userIdToken) {
                await dataSources.authAPI.deleteUser(userId);
                return "User has been DELETED"
            }
            else {
                console.log("El id de usuario enviado no coincide con el user id del token - deleteUser")
                return null
            };
        },

        //Login and refresh

        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.logIn(credentials);
        },

        refreshToken: async (_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
    }
};

module.exports = userResolver;