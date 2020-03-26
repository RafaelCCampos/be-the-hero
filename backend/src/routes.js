const express = require('express');

const routes = express.Router();

routes.get('/',(Request, Response) => {
    return Response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Rafael Campos'
    });
})

module.exports = routes;