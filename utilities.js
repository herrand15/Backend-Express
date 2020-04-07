const realmnId = "4620816365041757700";
const fetch = require("node-fetch");
const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..ARgdqCqjIbS_rbYOFa4M1g.qDxJ9VA1egR-BYw4FEtCjMNi13BxW0FoigXgpjVrLvMAPL2bXknWzRAJ0UCjiXfRdfX1X5hvZICThJPqEdXvR1-Qhc9S8FTrIFXHjwoikl-_qkAcjghZHT6kDS5nTtN-H6IJFbbJZ_oiA-YfGshWCddJjJTYp8FkkpLg31H1CS2Sv1DlkV1V0McS9k8wCiTxJjTaeyCpQviYwFHJnu1GY1J2DCE3TF977_MPYD1-ucuf4Nr2dv459ADh7g8kn7x0Z7MQ0PWae_YL0qWmUvAtAGxlmuE2h8UtmzjIBfavIIIyKLk7ajhnZc6raVdXF8mBQy0Ax-a9ePA2A_lMLjWyh4CPwlSspKjQUMUFly_daXBFQj0QivFgdWUEWw8St3KECCdp1bzCLEU9ZgxQm-pRrda-4tciVZLXppMyOypLWeqAFCRd4ykWb4MVxpEmZdlQhi2XcOJYgbEm3Q4ZBF3FVEo3ysiFRD7i-XfMDOKAmafB4-vcPFSVdGW3qlDXrzLuxBekmbxQJzubbpXGUHgiIBJBnL2NCjC_RPPd8pIXofP_GrMhEvA6dVzOF-ce5OruKaVQ-WkomXQ_--jReL3kbZkxh5dabU0sGyWVl7N-hhRrrkqvlpdGW8r3UR5BGmxByuLxIlJ8nHO-5Hw7qzpT45D2V8aQd3wDrB2KoU0OfI2ZrBbSERY1W92qyNwGx9du1R83BVfruwyAWe2WZFMcU4rZAs3OD9sGIqLX3U4IQmQ.eloX9nFfTGyF_Ogq2eJX6g";

async function getReq(query) {
    const fetchFun = await fetch(
        `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/query?${query} &minorversion=47`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${access}`,
                Accept: "application/json"
            }
        }
    );
    const json = await fetchFun.json();
    console.log(json);
    return json;
}

async function postReq() {
    const fetchFun = await fetch(
        `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/invoice?minorversion=47`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${access}`,
                Accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                Line: [
                    {
                        DetailType: "SalesItemLineDetail",
                        Amount: 12.0,
                        SalesItemLineDetail: {
                            ItemRef: {
                                name: "Services",
                                value: "2"
                            }
                        }
                    }
                ],
                CustomerRef: {
                    value: "1"
                }
            })
        }
    );
    const json = await fetchFun.json();
    return json;
}

module.exports = { getReq, postReq };
