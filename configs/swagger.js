import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog API",
            version: "1.0.0",
            description: "API para el manejo de un blog",
            contact:{
                name: "Gabriel Contreras",
                email: "jcontreras-2023179@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/blog/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js"
        
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}