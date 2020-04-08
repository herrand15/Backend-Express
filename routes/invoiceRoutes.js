const express = require("express");
let router = express.Router();
const requ = require("../utilities");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/getInvoices/:Id", async (req, res) => {
    const aaa = await requ.getReq(
        `query=select * from Invoice where CustomerRef = '${req.params.Id}' `
    );
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});

router.get("/getAllInvoices", async (req, res) => {
    const aaa = await requ.getReq(`query=select * from Invoice`);
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});

router.post("/newInvoice", async (req, res) => {
    console.log("imPERFECCIONGrande");
    console.log(req.body);
    //res.sendStatus(200);
    console.log(req.body.orderItems[0]);
    let L = [];
    for (let i = 0; i < req.body.orderItems.length; i++) {
        let product = {
            DetailType: "SalesItemLineDetail",
            Amount:
                req.body.orderItems[i].UnitPrice *
                req.body.itemQty[req.body.orderItems[i].Id],
            SalesItemLineDetail: {
                ItemRef: {
                    name: req.body.orderItems[i].Name,
                    value: req.body.orderItems[i].Id,
                },
                Qty: req.body.itemQty[req.body.orderItems[i].Id],
            },
        };
        L.push(product);
    }
    let invoice = {
        Line: L,
        CustomerRef: {
            value: req.body.clientId,
        },
    };

    const aaa = await requ.postReq(invoice);
    console.log(JSON.stringify(aaa));
    res.send({ aaa });
});

module.exports = router;
