const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;


app.use(express.json());

let contatos = [

    {
        "id": 1,
        "nome": "Fulano",
        "fone": "11111111111",
        "email": "fulano@email.com"
    },
    {
        "id": 2,
        "nome": "Ciclano",
        "fone": "22222222222",
        "email": "ciclano@email.com"
    },
    {
        "id": 3,
        "nome": "Beltrano",
        "fone": "33333333333",
        "email": "beltrano@email.com"
    }
]

/*
app.get('/home', (req, res) => {
    console.log('Página home');
})
*/


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});


