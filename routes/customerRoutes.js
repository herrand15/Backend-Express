const express = require('express');
let router = express.Router();
const requ = require('../utilities');


router.get("/", async (req, res)=>{
  
    const aaa = await requ.getReq(`query=select * from Customer`);
    res.send({aaa});
});



module.exports = router;