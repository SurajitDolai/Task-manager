const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const { enquireRoute } = require("./app/Route/User_Route");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001

app.use(enquireRoute);




mongoose.connect("mongodb://127.0.0.1:27017/Taskmanager")
    .then(() => {
        app.listen(PORT, () => {
            console.log("Successsfully create..........",PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })


