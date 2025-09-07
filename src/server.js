const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3986;

app.use(cors());
app.use(express.json());

const router = require("./router.js");
app.use(router);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
