const realmnId = "4620816365041757700";
const fetch = require("node-fetch");
const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..2oyiANJqPyfo3bfPFhVW-A.0ccU6fDjMwrNkWpnVntJKguafyM-4YvVav1PxMDg4vMyDA15KhcwT7ujIOu_SLIscGk99y92caMuVpYl_lScNmWyL9XHT8DWxObWHT8MerwfK1GR8MgYHFAeDiN2uuW9WDCZ28ArDB2VW-lGWwuNmqsI7AlocNUFnlEITq5Tgx9VySYNeOFqeLTVLaqzmcTnM0M4B-F3NjaNZuCgiKrBeAUkG12Nb_REomGR-iMXrtJTLz7Ggaul48GnO4yr0Ds5UBQ79A4mifAL-FMkDWr4V7LfdUaOYDOQhMjxGpWe44hbwWXboyjyh3rpR7Qh7rw2d9ZN1kN-wKnYmlfxF5MpGWpsGZPeoUJUwZ3kmzG7EWkvk-DjkQ8b0npW1DI2aysxet7TIKpjZaZCccktbjup8WXZVImXnw4TyhiGOLt_wkDfR-Gkw5_x1XEFxw2NVOxml0m1XGaonlsl_N9JsGm6TwqeQDgl2oqZQe9lRup2E5NGJ_H3d8yWRgqxzO9L9k8K0q1arKqeHr8_BIErnM7vp_yF3an0qqQvSqJIy9icNxm6ylt6D34jXMu4pk9aKsrtLfbnDIBP6V-B2vaPCOLg9OjxBADaaEUAcJ0-EP1hLiRaCR62Pdc1Fo6NL9AxNm-A4yc-SDTJzAB8Twiz6wBhi_FyMLskCmy4P1MmAMLYOkghGYmDKDwXARaqpAppAJCzRYN6RA_C2MVZlcwkvMOZkYIAbVfRDKlVvvs2ZJWwwac.cwZGZAjWAKNtGsy-u7ShUw";

async function getReq(query) {
    const fetchFun = await fetch(
        `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/query?${query} &minorversion=47`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${access}`,
                Accept: "application/json",
            },
        }
    );
    const json = await fetchFun.json();
    console.log(json);
    return json;
}

async function postReq(object) {
    const fetchFun = await fetch(
        `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/invoice?minorversion=47`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${access}`,
                Accept: "application/json",
            },
            method: "POST",
            body: JSON.stringify(object),
        }
    );
    console.log("ayuda");
    console.log(object);
    const json = await fetchFun.json();
    return json;
}

module.exports = { getReq, postReq };
