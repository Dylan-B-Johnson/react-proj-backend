const PORT = 4001;

const work = require("./work.js");
const users = require("./users.js");
const recipes = require("./recipes.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api/work", (req, res) => {
	res.send(work.work);
});

app.get("/api/recipes", (req, res) => {
	res.send(recipes.recipes);
});

app.get("/api/users", (req, res) => {
	res.send(users.users);
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
