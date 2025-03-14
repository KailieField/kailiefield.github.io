const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;

// ---- Serving static files (HTML, CSS, JS, Images)----
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ---- START SERVER ----
app.listen(PORT, () => {
    console.log(`[SERVER RUNNING ON : ${PORT}]`);
});
