const express = require("express");
const PORT = process.env.HTTP_PORT || 4001;
const app = express();

import "./data.json";

console.log("Steppted into server.js...");

// app.get("/", (req, res) => {
//     res.send("I believe it worked");
// });

// router.use("/song", require("./routes/songs"));
// router.use("/dev", require("./dev"));



app.get("/about", (req, res) => {
    res.json({
        name: "Church Windows",
        composer: "Some dude"
    });
});


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
