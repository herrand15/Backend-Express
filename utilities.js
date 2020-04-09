const realmnId = "4620816365041757700";
const fetch = require("node-fetch");
const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..nKL-uyDHf5vELX4rSiZMNg.1L497giprWSqm3OEnS8ccPlgUIalhckAal8sVm8fmJ_LTuLLRRz34C3Z3j4KqvvlC3XbUV2e3LmX5uefcPUmFKnjoEWbUwrQule42i7am114-j6POlS2XxlLQptm6ogy3PMT6QUbzVfvTbCsoeA_4QFQx7SXIBTjYvM1C8rL7U1eosY3LmbllU4a2ntyv6OT7tI8lgbuQZ-5bRcRk_F7tjLQGQmnGGGUmD0jjJoRuVI2Kt-dy2UzKbHFhJdpaKw1sPq__PHvu1DzMzDmGG6sPri2sIFQWXQ0tETquvPV-M5lSNgPlDLuAkepxQUWPdQcVGecdX19woA1rwYwdY46f2HzdQ6WpoZJJiYEbCfXWWgNCXkQMOn6_X_uv0DeiH0sPRcfoxUsHC3bF8INM45b-DMbnFPtXYUn12uXjV4JJdEhJ3dGe1vwO_ZLNUu_seh4jcaeQVharYCUK0RFMWOfip8EATWlCofDAZu5WdRedO7AccyFWv8yGrrvlkxGDq0MdbVBdC_3Qh8IrPXwvtd1P5MeExeJpfavNUS8or2U--DlJrymQYcrCTJztNwknJUI3KB6AUjfnxDDiqnxj_lLM0OwEVttuwfxrOZNVOK7NTzT9SW_mdMSs3FRe4xWVLNInDxO7qXtTfg9_i5YTQwkB1-aCNgA6_n8NtIP9kCNmJJYd7vBwC6C7Tbq_sZmu3d9TK702X6lHPG2A9oKiFRUlvG7Is1vVccTQyDi3O2aoXs.MMNOnnRxin8bouyZ3yoqrQ";

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
