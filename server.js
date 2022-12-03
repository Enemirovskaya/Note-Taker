const express = require('express');
const fs = require("fs");
const util = require('util');
const path = require('path');
const tipsRouter = (require('./routes/'));
const notes = require("./db/db.json");
const app = express();
const PORT = 3001

const uuId = require("uuid");
const{}

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res){
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});


// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("api/tips", tipsRouter); 

//Static middlewear
app.use(express.static('public'));
//Get route
app.get("/api/notes", (req, res)=> {
  res.sendFile(path.join(__dirname, "/db/db.json"))
})
//POST adding new notes to db.json
app.post("/api/notes", (req, res)=>{
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuId.v4();
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes))
  res.json(notes);
});

//Delete Notes
app.delete("/api/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const delNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(delNotes));
  res.json(delNotes);
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
