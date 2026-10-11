const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
res.json({ uzenet: "A napló API működik!" });
});
app.listen(PORT, () => {
console.log(`A szerver fut: http://localhost:${PORT}`);
});