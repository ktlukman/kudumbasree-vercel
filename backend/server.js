const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Connect to SQLite DB
const db = new Database("./users.sqlite", { verbose: console.log });

// GET all users
app.get("/", (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM users");
    const users = stmt.all();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - Create a new user
app.post("/create", (req, res) => {
  try {
    const stmt = db.prepare(`INSERT INTO users 
      (FirstName, LastName, Mobile, DateOfBirth, Proffession, Address, DateOfJoin, Position, WeeklyFee, AttendenceDays, Status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    
    const info = stmt.run(
      req.body.firstname,
      req.body.lastname,
      req.body.mobile,
      req.body.dateofbirth,
      req.body.proffession,
      req.body.address,
      req.body.dateofjoin,
      req.body.position,
      req.body.weeklyfee,
      req.body.attendence,
      req.body.status
    );
    
    res.json({ id: info.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update user
app.put("/update/:id", (req, res) => {
  try {
    console.log("Update request body:", req.body);
    console.log("Update user ID:", req.params.id);

    const stmt = db.prepare(`UPDATE users SET 
      FirstName = ?, LastName = ?, Mobile = ?, DateOfBirth = ?, Proffession = ?, Address = ?, 
      DateOfJoin = ?, Position = ?, WeeklyFee = ?, AttendenceDays = ?, Status = ?
      WHERE ID = ?`);

    const info = stmt.run(
      req.body.firstname,
      req.body.lastname,
      req.body.mobile,
      req.body.dateofbirth,
      req.body.proffession,
      req.body.address,
      req.body.dateofjoin,
      req.body.position,
      req.body.weeklyfee,
      req.body.attendence,
      req.body.status,
      req.params.id
    );

    res.json({ changes: info.changes });
  } catch (err) {
    console.error("PUT error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  try {
    const stmt = db.prepare("DELETE FROM users WHERE ID = ?");
    const info = stmt.run(req.params.id);
    res.json({ changes: info.changes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one user by ID
app.get("/lister/:id", (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM users WHERE ID = ?");
    const user = stmt.get(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
}); */
