const { ApolloError } = require('apollo-server');
const serverConfig = require("../server");
const fetch = require("node-fetch");

const authentication = async ({ request_ }) => {
    const token = request_.headers.authorization || '';
    console.log(typeof(token))

    if (token == '') {
        return { userIdToken: null }
    }
    else {
        try {

            let requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
                redirect: "follow"
            }

            //PETICION
            let response = await fetch(
                //String template para crear la ruta completa.
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions
            )

            if (response.status != 200) {
                console.log(response);
                throw new ApolloError(`La sesión está inactiva - ${401}` + response.status, 401)
            }

            return { 
                userIdToken: (await response.json()).UserId 
            };

        } catch (err) {
            console.log(err)
            throw new ApolloError('Autenticación fallida' + err, 500)
        }
    }
}

module.exports = authentication;