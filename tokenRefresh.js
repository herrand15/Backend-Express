require('dotenv').config();

const OAuthClient = require('intuit-oauth');

const oauthClient = new OAuthClient({
  clientId: process.env.CID,
  clientSecret: process.env.SEC,
  environment: "sandbox",
  redirectUri: "http://localhost:3000/TKserver"
  //logging: true,
});

oauthClient
  .refreshUsingToken("AB115936617402TkIJ44L7R3SytuuMlWlI3NrgtaQeHwiOsqiM")
  .then(function(authResponse) {
    console.log(authResponse);
    console.log(JSON.parse(authResponse));
  })
  .catch(function(e) {
    console.log(e);
    //console.error("The error message is :" + e.originalMessage);
    //console.error(e.intuit_tid);
  });
