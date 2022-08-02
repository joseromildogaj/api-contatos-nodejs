const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;


app.use(express.json());


app.get('/home', (req, res) => {
    console.log('Página home');
})


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});


