// call all typeDefs
const authTypes = require("./authTypeDefs")
const vehicleTypes = require('./vehicleTypeDefs')
const rentalTypes = require('./rentalTypeDefs')

const schemaArrays = [authTypes, vehicleTypes, rentalTypes]
module.exports = schemaArrays
