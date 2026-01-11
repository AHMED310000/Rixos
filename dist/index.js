import express from "express";
const app = express();
app.use(express.json());
const PORT = 5000;
const HOST = "0.0.0.0";
app.get("/", (req, res) => {
    res.send("Rixos backend is running");
});
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
