const express = require("express");
let router = express.Router();
const requ = require("../utilities");


router.get("/getInvoices/:Id", async (req, res) => {
    const aaa = await requ.getReq(`query=select * from Invoice where CustomerRef = '${req.params.Id}' `);
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});

router.post("/newInvoice", async (req, res) => {
    const aaa = await requ.postReq();
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});






module.exports = router;
