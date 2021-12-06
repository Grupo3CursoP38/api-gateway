const authResolver = require('./authResolver')
const vehicleResolver = require('./vehicleResolver')
const rentalResolver = require('./rentalResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, vehicleResolver, rentalResolver);
module.exports = resolvers;