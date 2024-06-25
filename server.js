// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORTA = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Rota para obter todos os itens de estudo
app.get('/api/estudar', (req, res) => {
  db.all("SELECT * FROM estudar", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Rota para adicionar um novo item de estudo
app.post('/api/estudar', (req, res) => {
  const { disciplina, assunto, data, hora, observacao, conclusao } = req.body;
  db.run(`INSERT INTO estudar (disciplina, assunto, data, hora, observacao, conclusao) VALUES (?, ?, ?, ?, ?, ?)`, [subject, topic, date, time], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: { id: this.lastID, disciplina, assunto, data, hora, observacao, conclusao} });
  });
});

app.listen(PORTA, () => {
  console.log(`servidor online em  ${PORTA}`);
});
