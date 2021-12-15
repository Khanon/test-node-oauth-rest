import express from "express";

const app = express();
const port = 8080;

app.set("view options", { layout: true });
app.use(express.json());

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test API REST</title>
</head>

<body>
    <h1>Test API REST</h1>
    <button type="button" onclick="login()">Login</button>
    <br>
    <br>
    <button type="button" onclick="get1()">Get1</button>
    <br>
    <br>
    <button type="button" onclick="post1()">Post1</button>

    <script>
        const login = () => {
            console.log("auth/login");
            fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   user: "user_name",
                   pass: "password"
                })
            }).then((resp) => {
                resp.json().then((r2) => {
                    console.log("Login response:", r2);
                });
            });
        }
        const get1 = () => {
            console.log("get1");
            fetch('http://localhost:8080/get1?user=usuario&pass=password', {
                method: 'GET'
             }).then((resp) => {
                resp.json().then((r2) => {
                    console.log("Get1 response:", r2);
                });
            });
        }
        const post1 = () => {
            console.log("post1");
            fetch('http://localhost:8080/post1', {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   a: 1, b: 2
                })
            }).then((resp) => {
                resp.json().then((r2) => {
                    console.log("Post1 response:", r2);
                });
            });
        }
    </script>
</body>
</html>`);
});

app.post("/auth/login", (req, res) => {
    console.log("auth/login body", req.body);
    console.log("auth/login params", req.params);
    console.log("auth/login query", req.query);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        key_auth:"value_auth"
    }));
});

app.get("/get1", (req, res) => {
    console.log("get1 body", req.body);
    console.log("get1 params", req.params);
    console.log("get1 query", req.query);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        key_get1:"value_get1"
    }));
});

app.post("/post1", (req, res) => {
    console.log("post1 body", req.body);
    console.log("post1 params", req.params);
    console.log("post1 query", req.query);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        key_post1:"value_post1"
    }));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
