const realmnId = "4620816365041757700";
const fetch = require("node-fetch");
const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..i_EeZlrMtoXBGl96pF4aPA.fEEvp3FBTjGIP1Zy_zdooSJ-H0TLtAsFTU11T3oVaNusMGWxzIe70EueybkfjP84bijdiPRYfX0aGsIPy0kOo5-hgAv0w9PiPVnU37PcyhHzoGzw3sbWxlXHU0gqqzXLEf7unkMRvXUy77k7btSBCKR_P4JSmtrdPcdOTD0-pfSM3lR5pZ6bEZjnFjdCs4K_vkrxhbzB0ClQz9muop_2481ewI6EZRDWlzhqFhALqqEX-pEEfs-qwmSrlddJvcggyxA6MhEgmekyYkxSJ7nYiRM2hxa1I4_x82LXev94fVQZd8DNiSMPqFpEbytIC5vXbpdANMPgQ1iSAd4ZZ9dpBSsOaA9DHDwBApXD2iZ2Kp6sGofKmuqlf4iz_QoYzH9QLg6EEkER5U9GF63MqCEQdln6R6J5gTot6A45-uouk7dXhABILAnBsxC1LRQmlD6mRZdagEOnNMAf8GckpWpXOT8n1fwV3t2p_NBzAISWQKqiNOODSZtkxofE7tN-hVbQr6NJBHBLP5ZceayOd22rhYNHlXAxI2tF1ZhU8rVndc_FumHNoeLbxAv6XF5d0VD58RrJiVO2FkxCDfhWEvJ2IH6AUEd9AvI7bd-28ORW9nT23cldRpwo48DYKIM33iIdTli4-X42kugP35aJGLLSwVYBEZvKovZDyXJZxS7cB9xX-LcS9_sS1dqlsuoORpHCHly0eFCPJkC2f_uDszpSVtrqQt7p9cmScz_EYX270_w.Z_NokqDkWgAT5VoUxN5iwQ";

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
