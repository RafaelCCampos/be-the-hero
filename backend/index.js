const express = require('express');

const app = express();

app.get('/',(Request, Response) => {
    return Response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Rafael Campos'
    });
})

app.listen(3333);