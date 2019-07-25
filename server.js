const express = require("express");
const PORT = process.env.HTTP_PORT || 4001;
const app = express();

app.get("/", (req, res) => {
    res.send("I believe it worked");
});

app.get("/song", (req, res) => {
    res.json({
        name: "Church Windows",
        composer: "Some dude"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
