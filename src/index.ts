import express from "express";

const app = express();
app.use(express.json());
 HEAD
app.get("/", (req, res) => {res.send("Rixos backend is running");});
app.listen(5000, "0.0.0.0",() => {console.log("Server running on port 5000");});

const PORT = 5000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Rixos backend is running");
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
>>>>>>> 71d8721 (Upload project from Termux)
