const realmnId = "4620816365041757700";
const fetch = require("node-fetch");
const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..AlTUFt4pbsF1d5ouvvaIlA.8rQzDMsjiSaRYqjDIyMgJKwXz1xlXh4xT8aVCpirttkSksETh2w62nyjjzuc6aR5LFMt3Pxe-CsIKXZkPkr6uPToxmSDt3Yac3I9vwDy5gb3aWgV4jMioZtLpqwbFmGd3iTksmclVk0FX_ltwC_2vxNIfau_az-oXw-yLwyhuJXq5osp7fX9k0GlMiReoHnF0hHyFrIKkHb4Hg5e-bTOLvopLRm--MGz2ztGIl9ejA2qJmCBesRWicXLFJ-X1m8EzORTruQgZIrvQEflj7gnifmrq7Ad5NdJ4B-ic02-DT7h-aZu-QKJwSW1rC1FE3A9jvv1GP6cDerOU0bvCqSthcvvMDCsHq1c8vAf7l-kbowWWVJhT_GFRGuYSXS_BO4aqWTnrywSo89Kf1kJDDnC94-Kzkhj1Gi4naLnOHif0dy0pJOCsFnnOzBD0wmn1Rhvee6eu3DYNSkbFKqEyccaUa3dbKeCtXIKcqShCJnlfvsribbr3FMulnKn0GdCJf-RxpuR4YYqw41-0ErI5cNMkmK1IK3BY8Nv2i7MLIMOj_ekYnMhY3VcMDsDTqpljPv_ILIxMmsixf5FKohoQVZFk27k18UlrVAbIHsoyRGClO-1IK4J6JfilgciTLlTH5E0xYs4mc62pUFk5baSXpH6dwvuuG0Ql8_NaZXj9jDtMPDSjovCwFrkqQkpChgn8BlKQ_euNeZa9Ut8YIbsdktCNcgCHv3jFiZXgi-cjvWVMkksBgbEDyujOsNV9JilzGsB.7It89WSkC3d6MglAQ3mPNg";

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
