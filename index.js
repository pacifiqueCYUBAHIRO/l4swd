
const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.json());
const port = 5000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Kigali_innovation_DB'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});


// Insert client
app.post("/clients", (req, res) => {
  const { Names, Sex, Address, Phone, Email } = req.body;
  db.query("INSERT INTO clients (Names, Sex, Address, Phone, Email) VALUES (?,?,?,?,?)",
    [Names, Sex, Address, Phone, Email],
    err => {
      if (err) res.status(500).json({ message: "Insert failed" });
      else res.status(201).json({ message: "Client added!" });
    });
});


// Get clients
app.get("/clients", (req, res) => {
  db.query('SELECT * FROM clients', (err, results) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).json(results);
  });
});


//get client by id
app.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM clients WHERE ID = ?', [id], (err, results) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).json(results[0]);
  });
});

// Update client
app.put("/clients/:id", (req, res) => {
  const { id } = req.params;
  const { Names, Sex, Address, Phone, Email } = req.body;
  db.query("UPDATE clients SET ? WHERE ID = ?", [{ Names, Sex, Address, Phone, Email }, id], (err) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).send('Client updated');
  });
});

// Delete client
app.delete("/clients/:id", (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM clients WHERE ID = ?', [id], (err) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).send('Client deleted');
  });
});

// Start server 

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


