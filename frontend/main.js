const express = require("express");
const app = express();
const port = 3003;
const cors = require('cors')
//middlewares

app.use("/", express.static("./pages/home"));
app.use("/game", express.static("./pages/game"));

app.listen(port, err => {
    if(err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }})
