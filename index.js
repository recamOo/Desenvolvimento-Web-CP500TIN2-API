const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/data-hora', (req, res) => {
    const agora = new Date();
    res.json({
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.toLocaleTimeString('pt-BR')
    });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));