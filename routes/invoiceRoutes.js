const express = require("express");
let router = express.Router();
const requ = require("../utilities");

router.post("/", async (req, res) => {
    const aaa = await requ.postReq();
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});

module.exports = router;
