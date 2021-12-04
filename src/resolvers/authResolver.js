const userResolver = {
    Query: {
        getUserById: async (_, { userId }, { dataSources, userIdToken }) => {

            console.log("User id: " + userId + " | " + "User id Token: " + userIdToken)
          
            if (userId == userIdToken)
                return await dataSources.authAPI.getUserById(userId);
            else {
                console.log("El id de usuario enviado no coincide con el user id del token")
                return null;
            }
        }
    },
    Mutation: {

        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.logIn(credentials);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
    }
};

module.exports = userResolver;