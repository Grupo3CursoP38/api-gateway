const vehicleResolver = {

    Query: {
        
        getVehicleById: async (_, { vehicleId }, { dataSources }) => {

            return await dataSources.vehicleApi.getVehicleById(vehicleId);

        },
        getVehicles: async (_, { }, { dataSources }) => {

            return await dataSources.vehicleApi.getVehicles();

        }

        //TODO getVehiclesByType

    },

    Mutation: {

        createVehicle: async (_, { vehicle }, { dataSources }) => {

            return await dataSources.vehicleApi.createVehicle(vehicle); //Devuelve el error en caso de haber.
        },

        updateVehicle: async (_, { vehicle }, { dataSources }) => {

            return await dataSources.vehicleApi.updateVehicle(vehicle);

        },

        deactiveVehicle: async (_, { vehicleId }, { dataSources }) => {

            await dataSources.vehicleApi.deactiveVehicle(vehicleId);
            return "Vehicle has been deactivated"

        },

        deleteVehicle: async (_, { vehicleId }, { dataSources }) => {

            await dataSources.vehicleApi.deleteVehicle(vehicleId);
            return "Vehicle has been DELETED"
         
        },

    }
};

module.exports = vehicleResolver;