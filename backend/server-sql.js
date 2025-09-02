const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
const db = mysql.createConnection({
  /* host: "p3plzcpnl504695.prod.phx3.secureserver.net",
  user: "luqman",
  password: "wpzn}_A%p,^G",
  database: "kudumbasree" */
  host: "localhost",
  user: "root",
  password: "",
  database: "kudumbasree"
})
app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.post('/create', (req, res) => {
  const sql = "INSERT INTO users (FirstName, LastName, Mobile, DateOfBirth, Proffession, Address, DateOfJoin, Position, WeeklyFee, AttendenceDays, Status) VALUES (?)";
  const values = [req.body.firstname, req.body.lastname, req.body.mobile, req.body.dateofbirth, req.body.proffession, req.body.address, req.body.dateofjoin, req.body.position, req.body.weeklyfee, req.body.attendence, req.body.status]
	db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})
app.put('/update/:id', (req, res) => {
  const sql = "update users set FirstName = ?, LastName = ?, Mobile = ?, DateOfBirth = ?, Proffession = ?, Address = ?, DateOfJoin = ?, Position = ?, WeeklyFee = ?, AttendenceDays = ?, Status = ? where ID = ?";
  const values = [req.body.firstname, req.body.lastname, req.body.mobile, req.body.dateofbirth, req.body.proffession, req.body.address, req.body.dateofjoin, req.body.position, req.body.weeklyfee, req.body.attendence, req.body.status]
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})
app.delete('/users/:id', (req, res) => {
  const sql = "DELETE FROM users WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})
app.get('/lister/:id', (req, res) => {
  const sql = "SELECT * FROM users WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
	  for(let i=0; i<data.length;i++){
		  return res.json(data[i]);
	  }
    //if (err) return res.json("Error");
    //return res.json(data);
  })
})
app.listen(8081, () => {
  console.log("listening");
});
