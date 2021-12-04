const authResolver = require('./authResolver')
//const accountResolver     = require('./accountResolver')
//const transactionResolver = require('./transactionResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver);
module.exports = resolvers;