import express from "express";

let cors = require('cors');
const app = express();
const port = 3000;

app.set("view options", { layout: true });
app.use(cors());
app.use(express.json());

app.get("/get1", (req, res) => {
    res.header('Content-Type', 'application/json');

    console.log("get1 body", req.body);
    console.log("get1 params", req.params);
    console.log("get1 query", req.query);

    res.send(JSON.stringify({
        key_get1:"value_get1"
    }));
});

app.post("/post1", (req, res) => {
    res.header('Content-Type', 'application/json');

    console.log("post1 body", req.body);
    console.log("post1 params", req.params);
    console.log("post1 query", req.query);

    res.send(JSON.stringify({
        key_post1:"value_post1"
    }));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
