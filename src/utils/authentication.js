const { ApolloError } = require('apollo-server');
const serverConfig = require("../server");
const fetch = require("node-fetch");

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';

    if (token == '') {
        console.log("Ningún token recibido.");
        return { userIdToken: null }
    }
    else {
        try {
            console.log("Token recibido: " + token);

            let requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
                redirect: "follow"
            }

            //PETICION
            let response = await fetch(
                //String template para crear la ruta completa.
                `${serverConfig.auth_api_url}verifyToken/`,
                requestOptions
            )

            if (response.status != 200) {
                response = await response.json();
                console.log(response);
                throw new ApolloError(`Error Detail: ` + response.detail, 401);
            }
   
            return {
                userIdToken: (await response.json()).UserId
            };

        } catch (err) {
            console.log(err)
            throw new ApolloError(`Autenticación fallida: ${err} `, 500)
        }
    }
}

module.exports = authentication;