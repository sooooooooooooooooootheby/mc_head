const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();
const PORT = 3986;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, './')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const router = require("./router.js");
app.use(router);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
