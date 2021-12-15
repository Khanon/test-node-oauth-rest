import express from "express";

let cors = require('cors');
const app = express();
const port = 3010;

app.set("view options", { layout: true });
app.use(cors());
app.use(express.json());

app.post("/auth/login", (req, res) => {
    res.header('Content-Type', 'application/json');

    console.log("auth/login body", req.body);
    console.log("auth/login params", req.params);
    console.log("auth/login query", req.query);

    res.send(JSON.stringify({
        key_auth:"value_auth"
    }));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
