require('dotenv').config();

const express = require('express');
const OAuthClient = require('intuit-oauth');
const app = express();
// PORT
const port = process.env.PORT || 3000;

const oauthClient = new OAuthClient({
    clientId: process.env.CID,
    clientSecret: process.env.SEC,
    environment: 'sandbox',
    redirectUri: 'http://localhost:3000/TKserver',
    //logging: true, 
});

console.log(oauthClient);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port);
app.get("/", (req, res) => {



console.log(process.env.CID);
console.log(process.env.SEC);
// AuthorizationUri
const authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId],state:'testState'});  
console.log(authUri);
res.redirect(authUri);

} )
app.get("/TKserver", (req,res) => { 
    console.log('tr');
    const parseRedirect = req.url;
    console.log(parseRedirect);
 
// Exchange the auth code retrieved from the **req.url** on the redirectUri
oauthClient.createToken(parseRedirect)
    .then(function(authResponse) {
        console.log('The Token is  '+ JSON.stringify(authResponse));
    })
    .catch(function(e) {
        console.error("The error message is :"+e.originalMessage);
        console.error(e.intuit_tid);
    });
    res.send(200);

} );

const mongoose = require('mongoose');
const Product= require('./models/product');
const Invoice= require('./models/invoice');
const Client= require('./models/cliente');



async function main(){
  await mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true } );
  console.log("db connected");
  //let pro = new Product({name: 'ok', price: 788});
  //await pro.save();
   
   /*let pro = await Product.findOne({});
   console.log(pro._id);
   let inv = new Invoice({customerId: 'djia', items: [pro],total: 254 ,date: new Date() });
   await inv.save();

   let inv2 = await Invoice.findOne({}).populate('items');
   console.log(inv2);*/
}

main();


const allClients = require('./routes/customerRoutes');
const newInvoice = require('./routes/invoiceRoutes');

app.use('/clientes', allClients);
app.use('/newInvoice', newInvoice);


/*
const express = require('express');
const app = express();
// PORT
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello!!!');
} );

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
*/