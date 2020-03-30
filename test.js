const fetch = require("node-fetch");
async function main() {
  const realmnId = "4620816365041757700";
  const access =
    "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..HAPQD9R6F5TI-tqPukPz5Q.IlJjJ0nd0Qs8e_lw8CNMvfqdn3_3v5ocEPNs9Vake_y_MGzao8Cfe72NBwpnXNj3n9_K9EKG9GNIOX0ytU4O99yQ299qj88kL_xaAvuOKXGECTsKRVwc4OFyoWfn2lm2S9g1k-MG7QAxcS-wyFss7Pzy7LkuFhgkculpT_-6mwt-hWgDbUr1xcH9B7g8cILy85mXWGUXEEzZR5vi14zlJaUPMtBA671oh-r__eXdzOX-WTINDrliAMAlULf016VWzs_pXpvPSDni0SvOqK7RpA1DVcsQXbm0PlMdYMLs0GxxAR7SsnnDjOaFqRVLSY0iISO7XoIrloW9wwPQXDEYH3CGVCil3a9cNlLPWAW6R987RqTLZ_9usmUXrC7GrasT2kcCnQGpIw7fFU6O4uKB-BCNPyHSBwzzhzwVZ4gDkZo8EMdNFUSm2RtHPpM0h6Iu64wwzi7-9R5H_EYvXjmg3PeTnr8i9JSUJCPlSDrjLlOwW5TEgwjohV69EhvFL4t0EN79cNT5puuF04tBJ3RH9_WG1v7rss0Fd1DB3SRCbqBMuDeCocMqWFA9wh3oM6OKqtf7aLeKH98ZEbTPgjR2AeTWYRIhBO1uUUyKYa7AHbdmO-0vyZWpC5O1zvxOLKZHa6r5l8RovghVQuBCPaJz4-xDZHnWfkA5t8ii5X2MTSG6kSOpzFGaKWy-idGbJykAuDoQ3oAZsDeGkjoVPyuxh8stEyuuF5_eRY7XhMnsi1Q.ProLqk7T8MYXj-RPPeXxmw";
    
/*
const apicall = await fetch(
    `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/tra &minorversion=47`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${access}`
      }
    }
  );*/


  const apicall = await fetch(
    `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmnId}/query?query=select * from Customer &minorversion=47`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${access}`,
        Accept : "application/json"
      }
    }
  );

const json = await apicall.json();
//const parser = new xml2js.Parser();
//const json = await parser.parseStringPromise(xml);
console.log(json);
console.log(json.QueryResponse.Customer[1]);
}

main();
