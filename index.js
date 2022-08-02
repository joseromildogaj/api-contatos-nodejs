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
    
];

// [GET] /contatos - retorna todos os contatos
app.get('/contatos', (req, res) => {
    res.status(200).json(contatos);
});


// [GET] /contatos - retorna um contato pelo id
app.get('/contatos/:id', (req, res) => {
    const indice = contatos.findIndex(item => item.id == req.params.id);
    if (indice == -1) {
        return res.status(404).json({});
    }
    return res.status(200).json(contatos[indice]);
});


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});


