const rentalResolver = {

    Query: {

        getRentalById: async (_, { rentalId }, { dataSources, userIdToken }) => {

            return await dataSources.rentalApi.getRentalById(rentalId);
     
        },

        getRentals: async (_, { }, { dataSources }) => {

            return await dataSources.rentalApi.getRentals();

        }
    },
    
    Mutation: {

        createRental: async (_, { rental }, { dataSources }) => {


            return await dataSources.rentalApi.createRental(rental); //Devuelve el error en caso de haber.
        },

        finishRental: async (_, { rental }, { dataSources }) => {

            return await dataSources.rentalApi.finishRental(rental);
       
        }
    }
};

module.exports = rentalResolver;