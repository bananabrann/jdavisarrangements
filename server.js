const express = require("express");
const PORT = process.env.HTTP_PORT || 4001;
const app = express();

import siteData from "./data.json";

console.log("Steppted into server.js...");

// app.get("/", (req, res) => {
//     res.send("I believe it worked");
// });

// router.use("/song", require("./routes/songs"));
// router.use("/dev", require("./dev"));

app.get("/songs" || "/dev", (req, res) => {
    res.json({
        siteData
    });
});



app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
