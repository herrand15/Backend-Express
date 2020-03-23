const fetch = require("node-fetch");
async function main() {
  const realmnId = "4620816365041757700";
  const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..xd-LZznf9Vjo-_1mN-5CIw.xiTgAtIrbTjhJK11xp4lOiJqNk3KVDX8KskcDkhREgkojDPhbxAef4hTmqwtvBUOdvmnPcYVmX6QPPNptKHJGcA9uRROJh31YNPWHGgpuN7pyDmSL_EWD3UMBaMwaUGADylwYQG2PmrfpS3YCMRVdbP37NUJqGsAD23CEGFVZ4j0zMQpyVinBrw-paKk753E46vOrwlGm5rbQ5ditl_SLmOhd8rixAOdRa6GgebULT9mVJKAAceKINh-292b3fdTEtMNxjS3T2KQ56h_3zLEA8r76uBx47XZlf1MpKTgkLb9HSWTBP4YSFug6dZcDpkDhSSXiVFObixX8C9GrfSJX05ieZAB9o5PXM5JEzekcerflE2LJ6Jv1pxDGluWINidLNga2Uj4y5nUkH13oBmUVtCWftTU5z_Xqcel-S0LptuzAhzAKwGvRo8XNVk7mJ8Da-q-Krq3n0DLA2Az_t9_XNuCB_E_IFv2Xqvio1VTRvkZTGHLlbfsLezgkKtFEzBkqUbRYDxS-lD_HFrvPntuOmy_HxGik5rWzxiMrRKhZi_clt8y67zhPJhF5_FMDhpfdQIzja0rb28j9sX94b1MA05jz4Y3cjnjufqXV-Q1urHIbX3SssI2AtI6_Vh_ulH4mnIq5wZ9ckPnt6XJjYszkiYuxihq3uvfLgLVKte1HMng98RzOFnn5Qx7e2wNetGMg6pez_-bOfgV-nrjatHAVWXpDyhSLFBRWmU-DJAn4-U5qg6mBereqmzxuJPH6tFSyPank_MgmAVkaTR7d6Q4rlLO8JNUay_bov0q3oook9je8yT42eVr-jXtu-paAHXZw_g6EkNjltOqpbDqiDACXQ.R2rA0Jq18vsWwOUCeoFXmw";
  const apicall = await fetch(
    `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/query?query=select * from invoice where Id = '34'&minorversion=47`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${access}`
      }
    }
  );
  const xml2js = require('xml2js');


const xml = await apicall.text();
const parser = new xml2js.Parser();
const json = await parser.parseStringPromise(xml);
console.log(json.IntuitResponse.QueryResponse[0].Invoice);
}

main();
