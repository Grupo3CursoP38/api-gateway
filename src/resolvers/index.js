const authResolver = require('./authResolver')
const vehicleResolver = require('./vehicleResolver')
//const transactionResolver = require('./transactionResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, vehicleResolver);
module.exports = resolvers;