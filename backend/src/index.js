const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    //restringindo o acesso da aplicação para o domínio utilizado
    //origin: 'http://meuapp.com'
}
));
app.use(express.json());
app.use(routes);

app.listen(3333);