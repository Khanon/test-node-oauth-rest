import express from "express";

const app = express();
const port = 8080;

app.set("view options", { layout: true });
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile((__dirname + "/index.html"));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
