const express = require("express");
const app = express();
const db = require("./utils/database");

const postRouter = require("./posts/posts.router");

app.use(express.json());

//? Utilize the environment variables in app
require("dotenv").config();

//? Authenticate database credentials
db.authenticate()
    .then(() => {
        console.log("Database POSTS-dB authenticated");
    })
    .catch((err) => {
        console.log(err);
    });

//? Sync sequelize models
db.sync()
    .then(() => {
        console.log("Database synced");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.json({
        message: "My server is running ok",
        password: process.env.MY_PASSWORD,
        apiKey: process.env.API_KEY,
    });
});

//?Post routers
app.use("/api/v1", postRouter);

app.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});

module.exports = app;
