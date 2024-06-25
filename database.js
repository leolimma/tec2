// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE estudar(id INTEGER PRIMARY KEY, disciplina TEXT, assunto TEXT, data TEXT, hora TEXT, observacao TEXT, conclusao INTEGER)");
});

module.exports = db;
