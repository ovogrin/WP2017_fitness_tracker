const express = require("express");
const app = require("./appObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(app.pictures))
    .get("/quotes", (req, res) => res.send(app.quotes))
    

module.exports.router = router;