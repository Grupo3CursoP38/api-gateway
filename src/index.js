const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');

//Data sources
const AuthAPI = require('./dataSources/authAPI');
const VehicleApi = require('./dataSources/vehicleApi');
const RentalApi = require('./dataSources/rentalApi');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        vehicleApi: new VehicleApi(),
        rentalApi: new RentalApi()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
}
);